import type { JSONSchema } from 'json-schema-to-ts'

export default {
  oneOf: [
    {
      const: 'foerderschule',
      description: '',
    },
    {
      const: 'gemeinschaftsschule',
      description: '',
    },
    {
      const: 'grundschule',
      description: '',
    },
    {
      const: 'gymnasium',
      description: '',
    },
    {
      const: 'issMitOberstufe',
      description: '',
    },
    {
      const: 'issOhneOberstufe',
      description: '',
    },
  ],
} as const satisfies JSONSchema
