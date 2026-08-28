import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('activityDuration', {
  scope: 'frame',
  adjustable: true,
  schema: {
    type: 'integer',
    title: 'Planned Activity Duration (In Minutes):',
    minimum: 5,
    maximum: 120,
    default: 45,
    description: 'How many minutes do you plan to spend on the activity?',
  },
}, 'chat')
