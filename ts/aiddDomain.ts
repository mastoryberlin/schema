import type { JSONSchema } from 'json-schema-to-ts'

export default {
  oneOf: [
    {
      const: 'pnpm-lock',
      description: '',
    },
  ],
} as const satisfies JSONSchema
