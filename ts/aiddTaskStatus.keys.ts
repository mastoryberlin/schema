export const aiddTaskStatus = ['idea', 'needsPlan', 'planned', 'approved', 'ready', 'inProgress', 'interrupted', 'onHold', 'review', 'done'] as const
export type AiddTaskStatus = typeof aiddTaskStatus[number]
