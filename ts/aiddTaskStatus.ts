import type { JSONSchema } from 'json-schema-to-ts'

export default {
  oneOf: [
    {
      const: 'idea',
      description: 'An idea, good or bad, quickly noted down.',
    },
    {
      const: 'needsPlan',
      description: 'An idea, clearly understandable but too complex to be fully specified in-place. Tasks with this status require an extra planning step before they can be considered "planned".',
    },
    {
      const: 'planned',
      description: 'Has either a more elaborated prompt than just an idea OR a standalone plan file, but either way it\'s still under construction.',
    },
    {
      const: 'approved',
      description: 'The plan is approved and ready for breakdown into subtasks.',
    },
    {
      const: 'ready',
      description: 'Ready for implementation.',
    },
    {
      const: 'inProgress',
      description: 'Vibe is working on implementing this task.',
    },
    {
      const: 'interrupted',
      description: 'Vibe has worked on this but was interrupted or exited before completion.',
    },
    {
      const: 'onHold',
      description: 'Don\'t pick up this task for the time being.',
    },
    {
      const: 'review',
      description: 'Implementation is complete, now this task wants human review.',
    },
    {
      const: 'done',
      description: 'Implementation complete and approved by a human.',
    },
  ],
} as const satisfies JSONSchema
