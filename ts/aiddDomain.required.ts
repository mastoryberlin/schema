import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'pnpm-lock',
    'pnpm-workspace',
  ],
} as const satisfies JSONSchema
