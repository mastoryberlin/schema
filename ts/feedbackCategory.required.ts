import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'requestFit',
    'profileFit',
    'curriculumFit',
    'creativity',
    'stepControl',
    'automationConvenience',
    'latency',
    'cost',
  ],
} as const satisfies JSONSchema
