import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'unitTests',
    'manual',
  ],
} as const satisfies JSONSchema
