import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('imageStyle', {
  scope: 'frame',
  adjustable: true,
  optional: true,
  schema: {
    title: 'Image Style',
    description: 'If you like, add some keywords on the desired image style, e.g. artistic, sci-fi realism, comic book ...',
    type: 'string',
    examples: [
      'anime',
      'sci-fi realism',
      'comic book',
      '...',
    ],
  },
}, 'chat')
