export const aiddTaskType = ['feature', 'bugfix', 'chore', 'plan', 'external', 'unknown'] as const
export type AiddTaskType = typeof aiddTaskType[number]
