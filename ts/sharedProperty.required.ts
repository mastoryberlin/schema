import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'activityDuration',
    'clStage',
    'cognitiveLevel',
    'country',
    'gradeLevel',
    'mathTopic',
    'pedagogicalUseCase',
    'standards',
    'targetGroup',
  ],
} as const satisfies JSONSchema
