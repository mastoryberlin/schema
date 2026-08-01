import type { JSONSchema } from 'json-schema-to-ts'

export default {
  oneOf: [
    {
      const: 'en',
      description: 'English',
    },
    {
      const: 'de',
      description: 'Deutsch',
    },
    {
      const: 'hu',
      description: 'Magyar',
    },
  ],
} as const satisfies JSONSchema
