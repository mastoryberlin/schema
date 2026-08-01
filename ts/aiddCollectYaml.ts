import type { JSONSchema } from 'json-schema-to-ts'
import aiddTasksArray from './aiddTasksArray.ts'

export default {
  ...aiddTasksArray,
} as const satisfies JSONSchema
