import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('pedagogicalUseCase', {
  schema: {
    type: 'string',
    enum: [
      'Activating Prerequisite Knowledge',
      'Introducing New Concepts',
      'Organizing and Systematizing Experiences',
      'Facilitating Productive Practice',
      'Applying and Transferring Knowledge',
      'Reviewing and Consolidating Learning',
      'Conducting Diagnostic Assessments',
      'Providing Remedial Scaffolding',
      'Coaching for High-Stakes Exams',
      'Conducting a Summative Assessment (Exam/Test)',
    ],
    description: 'Which didactic use-case best matches the lesson in question?',
  },
}, 'chat')
