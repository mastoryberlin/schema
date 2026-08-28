import { defineSharedProperty } from './.util.ts'

export default defineSharedProperty('cognitiveLevel', {
  scope: 'profile',
  adjustable: true,
  schema: {
    type: 'integer',
    minimum: 1,
    maximum: 10,
    description: 'On a scale from 1 (Sensory-Reflexive Engagement) to 10 (Meta-Systemic Synthesis and Theoretical Creation), which value best matches your students\' general cognitive developmental state?',
    // Per-value display hints (index i corresponds to the value i+1), rendered
    // by the Adjust Panel below the cognitive-level slider. Kept inside the
    // schema so every consumer (chat questions, extraction, expert prompts)
    // shares this one source of truth.
    'x-value-hints': [
      'Sensory-Reflexive Engagement',
      'Intentional-Participatory Engagement',
      'Magnitude Discrimination and Magnitude Sense',
      'Procedural-Symbolic Emergence',
      'Tangible-Concrete Logic',
      'Representational-Concrete Abstraction',
      'Abstract-Tool Mastery',
      'Formal-Analytical Abstraction',
      'Strategic-Generative Innovation',
      'Meta-Systemic Synthesis and Theoretical Creation',
    ],
  },
}, 'database')

// As soon as a class profile document is created, there is a default value for the cognitive level property.
// This value is sent to the CLConjecture workflow, along with all the documents that
// belong to the class (and the school). As a result, the CLConjecture workflow sets the updated
// value for the class (but not the school) in the DB.
// If we need the CL for a part of the class, the workflow is triggered, with all the documents
// that belong to that part of the class and the class CL value.
// In the Feedback phase (especially if there seems to be a fundamental mismatch between the provided
// materials and the expectations regarding difficulty), another workflow is triggered:
// the CLDiagnosis workflow. This workflow produces specific diagnostic questions regarding the actual
// cognitive level (and specifics of the selected profile) on the basis of the assumed cognitive level,
// and the provided materials (and potentially also the teacher's comments on the materials).
// The CLDiagnosis workflow updates the cognitive level value based on the answers and writes a summary
// of what additional, interesting details were included in the answers about strategies or specifics
// of the student group in question into the profile document of this student group.
