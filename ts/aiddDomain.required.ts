import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'pnpm-lock',
  ],
} as const satisfies JSONSchema
