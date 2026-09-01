import type { JSONSchema } from 'json-schema-to-ts'

export default {
  oneOf: [
    {
      const: 'openDispatch',
      description: 'Find out what a new chat should be about, then dispatch to another focus accordingly.',
    },
    {
      const: 'setUpNewTargetGroup',
      description: 'Chat with the user to collect information on a new target group profile - a school, a class, or a (sub)group of students within a class - as detailed in the current focus context.',
    },
    {
      const: 'clarifyGenerationGoal',
      description: 'Chat with the user to get a detailed idea of what they ultimately want us to generate in the current request.',
    },
    {
      const: 'consult',
      description: 'Be a focused didactic consultant to help the user work around their current challenges.',
    },
    {
      const: 'coCreate',
      description: 'Work out a canvas document in an iterative process including AI generation and manual edits applied by the user.',
    },
    {
      const: 'collectExtraData',
      description: 'Ask user targeted questions and use the answers to create missing background docs, complete existing ones, and populate shared property values on the fly.',
    },
    {
      const: 'finalize',
      description: 'Help the user share the canvas document, print it, or otherwise prepare it for usage in-class or outside.',
    },
    {
      const: 'revisit',
      description: 'Find out why the user reopened the document this time, then dispatch to another focus accordingly.',
    },
    {
      const: 'evaluateGeneratedQuality',
      description: '',
    },
  ],
} as const satisfies JSONSchema
