import type { FromSchema, JSONSchema } from 'json-schema-to-ts'
import type { ValueStrategy } from '../valueStrategy.keys.ts'
import type { DocumentCategory } from '../documentCategory.keys.ts'
import type { KnowledgeTier } from '../knowledgeTier.keys.ts'
import type { SharedPropertyScope } from '../sharedPropertyScope.keys.ts'
import type { DrizzleD1Database } from 'drizzle-orm/d1'
import type * as schema from '@nuxthub/db/schema'
import { sql } from 'drizzle-orm'

type SharedPropertyDefinition<S extends JSONSchema & object, V extends ValueStrategy> = {
  /**
   * The JSON schema defining this property's type and structure.
   */
  schema: S
  /**
   * The scope per which this property defines its value.
   */
  scope: SharedPropertyScope | SharedPropertyScope[]
  /**
   * List here any topic or didactical tags that should be auto-implied by this property.
   */
  tags?: string[]
  /**
   * If set to `true`, this property is not required to have a value for generation to succeed.
   */
  optional?: boolean
  /**
   * If `true`, includes this property in the Adjust Panel, allowing the user to manually override any agent-defined setting.
   * Set this to `false` (default) to explicitly mark the property as a hidden agent-only prop that works behind the scenes.
   */
  adjustable?: boolean
}

type ComputerContext = {
  profileTags: string[]
  getProfileDocs: () => Promise<Record<KnowledgeTier, string>>
  db: DrizzleD1Database<typeof schema>
}
type Computer<S extends JSONSchema & object> = (ctx: ComputerContext) => FromSchema<S>

export type SharedPropertyBaseReturnType<Name extends string, S extends JSONSchema & object, V extends ValueStrategy>
  = SharedPropertyDefinition<S, V> & {
    name: Name
    valueStrategy: V
    referDocumentsFromCategories: (...documentCategories: DocumentCategory[]) => SharedPropertyDefinition<S, V> & {
      name: Name
      documentCategories: DocumentCategory[]
    }
  }

export function defineSharedProperty<const Name extends string, const S extends JSONSchema & object, const V extends 'computed'>(
  name: Name,
  def: SharedPropertyDefinition<S, V>,
  valueStrategy: V,
): SharedPropertyBaseReturnType<Name, S, V> & {
  computer: (handler: Computer<S>) => (SharedPropertyBaseReturnType<Name, S, V> & { computer: () => FromSchema<S> })
}
export function defineSharedProperty<const Name extends string, const S extends JSONSchema & object, const V extends'documents'>(
  name: Name,
  def: SharedPropertyDefinition<S, V>,
  valueStrategy: V,
): SharedPropertyBaseReturnType<Name, S, V> & {
  documentCategories: (...documentCategories: DocumentCategory[]) => (SharedPropertyBaseReturnType<Name, S, V> & { documentCategories: DocumentCategory[] })
}
export function defineSharedProperty<const Name extends string, const S extends JSONSchema & object, const V extends Exclude<ValueStrategy, 'computed' | 'documents'>>(
  name: Name,
  def: SharedPropertyDefinition<S, V>,
  valueStrategy: V,
): SharedPropertyBaseReturnType<Name, S, V> & {
  referDocumentsFromCategories: (...documentCategories: DocumentCategory[]) => (SharedPropertyBaseReturnType<Name, S, V> & { documentCategories: DocumentCategory[] })
}
export function defineSharedProperty<const Name extends string, const S extends JSONSchema & object, const V extends ValueStrategy>(
  name: Name,
  def: SharedPropertyDefinition<S, V>,
  valueStrategy: V,
) {
  const ret = {
    ...def,
    valueStrategy,
    name,
  }
  switch (valueStrategy) {
    case 'chat':
    case 'followUp':
    case 'genFramePlaceholder':
      return {
        ...ret,
        referDocumentsFromCategories: function (...documentCategories: DocumentCategory[]) {
          return {
            ...ret,
            documentCategories,
          }
        },
      }
    case 'documents':
      return {
        ...ret,
        documentCategories: function (...documentCategories: DocumentCategory[]) {
          return {
            ...ret,
            documentCategories,
          }
        },
      }
    case 'form':
      throw `sharedProperty ${name}: valueStrategy "form" is not yet implemented!`
    case 'database':
      return ret
    case 'computed':
      return {
        ...ret,
        computer: function (handler: Computer<S>) {
          return {
            ...ret,
            computer: handler,
          }
        },
      }
  }
}

export async function getBestMatchInValuationTable({ db, profileTags }: Pick<ComputerContext, 'db' | 'profileTags'>) {
  return await db.all(sql`WITH
    -- Extract the tags from the profile you're interested in
    profile_tags AS (
      SELECT value AS tag FROM json_each(${JSON.stringify(profileTags)})
    ),
    -- For each valuation row, count matching tags and extra tags
    valuation_matches AS (
      SELECT
        v.*,
        (
          SELECT COUNT(*)
          FROM json_each(v.profile_tags) AS ve
          JOIN profile_tags AS pt ON ve.value = pt.tag
        ) AS match_count,
        (
          SELECT COUNT(*)
          FROM json_each(v.profile_tags) AS ve
          LEFT JOIN profile_tags AS pt ON ve.value = pt.tag
          WHERE pt.tag IS NULL
        ) AS extra_tags_count,
        -- Check if the sets are exactly identical
        (
          SELECT COUNT(*)
          FROM json_each(v.profile_tags) AS ve
        ) = (
          SELECT COUNT(*)
          FROM profile_tags
        ) AND (
          SELECT COUNT(*)
          FROM json_each(v.profile_tags) AS ve
          LEFT JOIN profile_tags AS pt ON ve.value = pt.tag
          WHERE pt.tag IS NULL
        ) = 0 AS is_exact_match
      FROM valuation v
    )
  -- Select all valuation rows with computed columns, ordered by:
  -- 1. Exact match first
  -- 2. Match count (descending)
  -- 3. Extra tags count (ascending)
  SELECT v.*, match_count, extra_tags_count, is_exact_match
  FROM valuation_matches v
  ORDER BY
    is_exact_match DESC,
    match_count DESC,
    extra_tags_count ASC;`)
}
