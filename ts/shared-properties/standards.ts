import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('standards', {
  schema: {
    type: 'text',
    title: 'Standards',
    description: 'Which standards from the curriculum are related to the activity?',
  },
}, 'database')

