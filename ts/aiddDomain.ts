import type { JSONSchema } from 'json-schema-to-ts'

export default {
  oneOf: [
    {
      const: 'pnpm-lock',
      description: '',
    },
    {
      const: 'pnpm-workspace',
      description: '',
    },
  ],
} as const satisfies JSONSchema
