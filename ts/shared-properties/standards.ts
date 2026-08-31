import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('standards', {
  scope: 'frame',
  // Curriculum standards live in the valuation database (valueStrategy
  // 'database') and are meant to be derived by the system, not asked from the
  // user - generation must not block on them being unavailable.
  optional: true,
  schema: {
    type: 'string',
    title: 'Standards',
    description: 'Which standards from the curriculum are related to the activity?',
  },
}, 'database')

