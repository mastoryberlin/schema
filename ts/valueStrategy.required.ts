import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'chat',
    'form',
    'followUp',
    'computed',
    'genFramePlaceholder',
    'documents',
  ],
} as const satisfies JSONSchema
