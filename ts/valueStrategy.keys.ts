export const valueStrategy = ['chat', 'form', 'followUp', 'computed', 'genFramePlaceholder', 'documents'] as const
export type ValueStrategy = typeof valueStrategy[number]
