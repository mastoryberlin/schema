import type { JSONSchema } from 'json-schema-to-ts'

export default {
  oneOf: [
    {
      const: 'correctness',
      description: 'Mathematical correctness of the generated content',
    },
    {
      const: 'didactics',
      description: 'Didactic suitability for the target group',
    },
    {
      const: 'language',
      description: 'Clarity and quality of language',
    },
    {
      const: 'alignment',
      description: 'Alignment with your request',
    },
    {
      const: 'overall',
      description: 'Overall quality of the result',
    },
  ],
} as const satisfies JSONSchema
