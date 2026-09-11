import type { JSONSchema } from "json-schema-to-ts"
import { feedbackCategory } from "../feedbackCategory.keys.ts";

export default {
  type: 'object',
  properties: {
    $schema: true,
    paths: {
      type: 'object',
      patternProperties: {
        '(?:prompts)': {
          type: 'string'
        }
      },
      additionalProperties: false,
    },
    feedback: {
      type: 'object',
      patternProperties: {
        [`(?:${feedbackCategory.join('|')})`]: {
          type: 'object',
          properties: {
            mode: {
              type: 'string',
              enum: [
                'auto',
                'human',
              ],
            },
            threshold: {
              type: 'number',
              enum: Array(10).fill(0).map((_, i) => (i+1) / 2),
            }
          },
          additionalProperties: false,
        },
      },
      additionalProperties: false,
    },
  },
  additionalProperties: false
} as const satisfies JSONSchema