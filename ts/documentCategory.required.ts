import { knowledgeTier } from './knowledgeTier.keys.ts'


import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    ...knowledgeTier,
    'classroom.worksheet',
    'plan.timeline',
    'topic.assessment',
    'topic.bestPractice',
  ],
} as const satisfies JSONSchema
