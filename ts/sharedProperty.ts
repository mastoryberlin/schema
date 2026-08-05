import type { JSONSchema } from 'json-schema-to-ts'

export default {
  oneOf: [
    {
      const: 'activityDuration',
      description: 'How many minutes do you plan to spend on the activity?',
    },
    {
      const: 'clStage',
      description: 'The target group\'s stage of development within the spectrum of the selected cognitiveLevel.',
    },
    {
      const: 'cognitiveLevel',
      description: 'Which of the following descriptions best matches your students\' general cognitive developmental state?',
    },
    {
      const: 'country',
      description: 'In which country do your students attend school?',
    },
    {
      const: 'gradeLevel',
      description: 'What grade level are your students in?',
    },
    {
      const: 'mathTopic',
      description: 'What math topic would you like to focus on? (e.g., basic arithmetic, solving quadratic equations by factoring, calculating the area of irregular shapes)',
    },
    {
      const: 'pedagogicalUseCase',
      description: 'Which didactic use-case best matches the lesson in question?',
    },
    {
      const: 'standards',
      description: 'Which standards from the curriculum are related to the activity?',
    },
    {
      const: 'targetGroup',
      description: '',
    },
  ],
} as const satisfies JSONSchema
