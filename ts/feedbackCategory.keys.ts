export const feedbackCategory = ['requestFit', 'profileFit', 'curriculumFit', 'creativity', 'stepControl', 'automationConvenience', 'latency', 'cost'] as const
export type FeedbackCategory = typeof feedbackCategory[number]
