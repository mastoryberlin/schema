import type { JSONSchema } from 'json-schema-to-ts'

export default {
  required: [
    'badenWuerttemberg',
    'bayern',
    'berlin',
    'brandenburg',
    'bremen',
    'hamburg',
    'hessen',
    'mecklenburgVorpommern',
    'niedersachsen',
    'nordrheinWestfalen',
    'rheinlandPfalz',
    'saarland',
    'sachsen',
    'sachsenAnhalt',
    'schleswigHolstein',
    'thueringen',
  ],
} as const satisfies JSONSchema
