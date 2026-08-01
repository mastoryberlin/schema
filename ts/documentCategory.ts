import knowledgeTier from './knowledgeTier.ts'
import type { JSONSchema } from 'json-schema-to-ts'

export default {
  oneOf: [
    ...knowledgeTier.oneOf,
    {
      const: 'classroom.worksheet',
      description: 'Documents for classroom use: a worksheet either for in-class hand-outs or homework',
    },
    {
      const: 'plan.timeline',
      description: 'A timeline',
    },
    {
      const: 'topic.assessment',
      description: 'Topic-specific documents describing an assessment of the current state of knowledge',
    },
    {
      const: 'topic.bestPractice',
      description: 'Topic-specific documents describing repeating experiences and best practices',
    },
  ],
} as const satisfies JSONSchema
