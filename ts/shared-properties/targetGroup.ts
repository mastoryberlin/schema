import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('targetGroup', {
  scope: 'profile',
  adjustable: true,
  schema: {
    title: 'Target Group',
    description: `Provide a brief description of the characteristics of the heterogeneous group. This should include characterising any special students or groups whose different needs will require different approaches, such as different roles or differentiated materials during lessons. `,
    type: 'string',
    examples: ['Besides the average students, I have a group of English language learners, a group of students with learning difficulties and one quick learner.', '...'],
    default: '',
  },
  tags: ['assessment', 'bestPractice'],
}, 'documents').documentCategories('knowledge.student')
