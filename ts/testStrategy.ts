import type { JSONSchema } from 'json-schema-to-ts'

export default {
  oneOf: [
    {
      const: 'unitTests',
      description: 'This task is suitable for a test-driven development (TDD) approach: Write unit tests that fail before implementation (red phase), then implement desired changes (yellow) until all tests pass (green).',
    },
    {
      const: 'manual',
      description: 'This task cannot reasonably checked through unit tests (alone). After implementing, extend your response to instruct the user on how they can manually check your changes the easiest.',
    },
  ],
} as const satisfies JSONSchema
