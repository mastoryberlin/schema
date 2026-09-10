export const feedbackCategory = ['correctness', 'didactics', 'language', 'alignment', 'overall'] as const
export type FeedbackCategory = typeof feedbackCategory[number]
