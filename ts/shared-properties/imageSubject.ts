import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('imageSubject', {
  scope: 'frame',
  adjustable: true,
  schema: {
    title: 'Image Subject',
    description: 'Describe in 1-2 sentences what the image should contain - its depicted content, style and configuration - and what it shouldn\'t.',
    type: 'string',
    examples: [
      'An anime-style illustration of a competitive kayaker training on a scenic river, paddling upstream against the current. Avoid including text or math content.',
      'A serene ancient Egyptian temple courtyard at dawn with a loaf of bread cut into two equal halves on a stone table.',
      '...',
    ],
  },
}, 'genFramePlaceholder')
