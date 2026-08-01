import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('clStage', {
  scope: 'profile',
  schema: {
    type: 'string',
    enum: [
      'early',
      'mid',
      'late',
    ],
    title: 'clStage',
    description: 'Which standards from the curriculum are related to the activity?',
  },
}, 'documents').documentCategories('knowledge.student')

// Computed directly from the cognitiveLevel number
