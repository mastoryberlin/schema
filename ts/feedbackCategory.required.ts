import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'correctness',
    'didactics',
    'language',
    'alignment',
    'overall',
  ],
} as const satisfies JSONSchema
