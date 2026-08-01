import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    1,
    2,
    3,
  ],
} as const satisfies JSONSchema
