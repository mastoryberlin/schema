import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'activityDuration',
    'clStage',
    'cognitiveLevel',
    'country',
    'diagramSubject',
    'gradeLevel',
    'imageStyle',
    'imageSubject',
    'mathTopic',
    'pedagogicalUseCase',
    'showCoordinatePlane',
    'standards',
    'targetGroup',
  ],
} as const satisfies JSONSchema
