import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('standards', {
  scope: 'frame',
  schema: {
    type: 'string',
    title: 'Standards',
    description: 'Which standards from the curriculum are related to the activity?',
  },
}, 'database')

