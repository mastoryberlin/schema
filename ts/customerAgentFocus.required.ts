import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'openDispatch',
    'setUpNewSchool',
    'setUpNewClass',
    'setUpNewSubGroup',
    'clarifyGenerationGoal',
    'consult',
    'coCreate',
    'collectExtraData',
    'finalize',
    'revisit',
    'evaluateGeneratedQuality',
  ],
} as const satisfies JSONSchema
