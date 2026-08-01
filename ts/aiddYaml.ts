import type { JSONSchema } from 'json-schema-to-ts'
import testStrategy from './testStrategy.ts'
import layer from './layer.ts'
import aiddTasksArray from './aiddTasksArray.ts'

export default {
  $schema: 'https://json-schema.org/draft/2019-09/schema',
  definitions: aiddTasksArray.definitions,
  type: 'object',
  properties: {
    goal: {
      type: 'string',
    },
    defaultLayer: layer,
    defaultTestStrategy: testStrategy,
    tasks: aiddTasksArray,
  },
  required: ['goal', 'tasks'],
  unevaluatedProperties: false,
} as const satisfies JSONSchema
