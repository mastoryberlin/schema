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
    description: 'The target group\'s stage of development within the spectrum of the selected cognitiveLevel.',
  },
}, 'documents').documentCategories('knowledge.student')

// ... or compute directly from the cognitiveLevel number ??
