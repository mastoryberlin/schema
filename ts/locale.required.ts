import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'en',
    'de',
    'hu',
  ],
} as const satisfies JSONSchema
