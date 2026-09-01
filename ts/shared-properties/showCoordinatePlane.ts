import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('showCoordinatePlane', {
  scope: 'frame',
  adjustable: true,
  optional: true,
  schema: {
    title: 'Show Coordinate Plane',
    description: 'Should the diagram include a coordinate plane with axes, ticks, and number labels?',
    type: 'boolean',
    examples: [
      true,
      false,
    ],
  },
}, 'chat')
