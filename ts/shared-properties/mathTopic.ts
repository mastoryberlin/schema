import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('mathTopic', {
  scope: 'frame',
  adjustable: true,
  schema: {
    title: 'Math Topic',
    description: 'What math topic would you like to focus on? (e.g., basic arithmetic, solving quadratic equations by factoring, calculating the area of irregular shapes)',
    type: 'string',
    examples: [
      'Calculating missing sides using the Pythagorean Theorem',
      'The topic of the standard CCSS.Math.Content.8.G.B.7',
      '...',
    ],
  },
  tags: ['plan', 'bestPractice'],
}, 'chat')
