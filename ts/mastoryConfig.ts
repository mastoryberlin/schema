import type { JSONSchema } from 'json-schema-to-ts'

export default {
  type: 'object',
  properties: {
    accountId: {
      type: 'string',
    },
    remoteResources: {
      oneOf: [
        {
          type: 'object',
          properties: {
            db: {
              type: 'boolean',
            },
            blob: {
              type: 'boolean',
            },
            masWorker: {
              type: 'boolean',
            },
          },
        },
        {
          type: 'boolean',
        },
      ],
    },
    disableLayers: {
      type: 'array',
      items: {
        type: 'number',
      },
    },
  },
} as const satisfies JSONSchema
