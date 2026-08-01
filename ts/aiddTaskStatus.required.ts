import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'idea',
    'needsPlan',
    'planned',
    'approved',
    'ready',
    'inProgress',
    'interrupted',
    'onHold',
    'review',
    'done',
  ],
} as const satisfies JSONSchema
