import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('diagramSubject', {
  scope: 'frame',
  adjustable: true,
  schema: {
    title: 'Diagram Subject',
    description: 'Describe what the diagram should and shouldn\'t contain - e.g. geometrical shapes, function graphs, points, labels - how elements should look and how to arrange them. Mention whether a coordinate plane with axes is wanted.',
    type: 'string',
    examples: [
      'A coordinate plane with a right triangle and its hypotenuse AB with A=(1,2) and B=(3,4), including axes with ticks and number labels. Avoid decorative elements.',
      'The unit circle with the angles 0, 30, 45, 60 and 90 degrees marked, plus their sine values as dashed vertical lines.',
      '...',
    ],
  },
}, 'genFramePlaceholder')
