import type { JSONSchema } from "json-schema-to-ts";

export default {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Mastory Tool Definition",
  "definitions": {
    "goto": {
      "type": "string"
    }
  },
  "type": "object",
  "properties": {
    "title": {
      "type": "string"
    },
    "inputs": {
      "type": "array",
      "items": {
        "type": "string"
      }
    },
    "steps": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {
            "type": "string"
          },
          "model": {
            "type": "string"
          },
          "prompt": {
            "type": "string"
          },
          "uses": {
            "type": "array",
            "items": {
              "type": "string"
            }
          },
          "max_attempts": {
            "type": "number"
          },
          "if": {
            "type": "string"
          },
          "then": {
            "oneOf": [
              {
                "type":"string",
                "const": "end"
              },
              {
                "type":"object",
                "properties": {
                  "goto":{

                    "$ref": "#/definitions/goto"
                  }
                }
              }
            ]
          },
          "with": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type":"array",
                "items": {
                  "type":"string"
                }
              }
            ]
          },
          "do": {
            "type":"object",
            "oneOf": [
              {"properties": {
                "goto":{

                  "$ref": "#/definitions/goto"
                }
              }}
            ]
          },
          "parallel": {
            "type": "number"
          }
        },
        "required": [],
        "additionalProperties": false
      }
    }
  },
  "required": [
    "title",
    "inputs",
    "steps"
  ],
  "additionalProperties": false
} as const satisfies JSONSchema