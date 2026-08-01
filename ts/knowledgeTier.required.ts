import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'edusys',
    'org',
    'account',
    'student',
    'info',
  ],
} as const satisfies JSONSchema
