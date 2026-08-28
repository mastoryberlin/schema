import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('gradeLevel', {
  scope: 'profile',
  adjustable: true,
  schema: {
    type: 'string',
    enum: [
      'Grade 1',
      'Grade 2',
      'Grade 3',
      'Grade 1-3',
      'Grade 4',
      'Grade 5',
      'Grade 6',
      'Grade 4-6',
      'Grade 7',
      'Grade 8',
      'Grade 9',
      'Grade 7-9',
      'Grade 10',
      'Grade 11',
      'Grade 12',
      'Grade 13',
    ],
    description: 'What grade level are your students in?',
  },
}, 'computed')
