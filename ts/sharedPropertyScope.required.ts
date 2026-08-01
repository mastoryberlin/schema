import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'frame',
    'document',
    'conversation',
    'profile',
    'account',
    'organization',
  ],
} as const satisfies JSONSchema
