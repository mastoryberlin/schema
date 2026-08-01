import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('country', {
  schema: {
    type: 'string',
    title: 'Country',
    default: 'USA',
    description: 'In which country do your students attend school?',
    examples: [
      'USA',
      'Germany',
      'India',
      'UK',
      'Hungary',
      '...',
    ],
  },
}, 'chat')
