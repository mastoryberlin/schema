import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('cognitiveLevel', {
  scope: 'profile',
  schema: {
    type: 'string',
    enum: [
      '1 - Sensory-Reflexive Engagement',
      '2 - Intentional-Participatory Engagement',
      '3 - Magnitude Discrimination and Magnitude Sense',
      '4 - Procedural-Symbolic Emergence',
      '5 - Tangible-Concrete Logic',
      '6 - Representational-Concrete Abstraction',
      '7 - Abstract-Tool Mastery',
      '8 - Formal-Analytical Abstraction',
      '9 - Strategic-Generative Innovation',
      '10 - Meta-Systemic Synthesis and Theoretical Creation',
    ],
    description: 'Which of the following descriptions best matches your students\' general cognitive developmental state?',
  },
}, 'database')

// As soon as a class profile document is created, there is a default value for the cognitive level property,
// This value is going to be sent to the CLConjecture workflow, along with all the documents that
// belong to the class (and the school). As a result, the CLConjecture workflow sets the updated
// value for the class (but not the school) in the DB.
// If we need the CL for a part of the class, the workflow will be triggered, with all the documents
// that belong to that part of the class and the class CL value.
// In the Feedback phase (especially if there seems to be a fundamental mismatch between the provided
// materials and the expectations regarding difficulty), an other workflow will be triggered:
// the CLDiagnosis workflow. This workflow produces specific diagnostic questions regarding the actual
// cognitive level (and specifics of the selected profile) on the basis of the assumed cognitive level,
// and the provided materials (and potentially also the critics of the teacher on the materials).
// The CLDiagnosis workflow updates the cognitive level value based on the answers and writes a summary
// of what additional, interesting details were included in the answers about strategies or specifics
// of the student group in question into the profile document of this student group.
