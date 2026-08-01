import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'foerderschule',
    'gemeinschaftsschule',
    'grundschule',
    'gymnasium',
    'issMitOberstufe',
    'issOhneOberstufe',
  ],
} as const satisfies JSONSchema
