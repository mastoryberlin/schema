import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'chat',
    'form',
    'followUp',
    'database',
    'computed',
    'genFramePlaceholder',
    'documents',
  ],
} as const satisfies JSONSchema
