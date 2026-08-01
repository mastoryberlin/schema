import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'feature',
    'bugfix',
    'chore',
    'plan',
    'external',
    'unknown',
  ],
} as const satisfies JSONSchema
