import type { JSONSchema } from 'json-schema-to-ts'

export default {
  oneOf: [
    {
      const: 'activityDuration',
      description: 'How many minutes do you plan to spend on the activity?',
    },
    {
      const: 'clStage',
      description: 'What\'s your students\' current stage of development within the spectrum of the selected cognitive level?',
    },
    {
      const: 'cognitiveLevel',
      description: 'On a scale from 1 (Sensory-Reflexive Engagement) to 10 (Meta-Systemic Synthesis and Theoretical Creation), which value best matches your students\' general cognitive developmental state?',
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
      description: 'Provide a brief description of the characteristics of the heterogeneous group. This should include characterising any special students or groups whose different needs will require different approaches, such as different roles or differentiated materials during lessons. ',
    },
  ],
} as const satisfies JSONSchema
