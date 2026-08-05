export const valueStrategy = ['chat', 'form', 'followUp', 'database', 'computed', 'genFramePlaceholder', 'documents'] as const
export type ValueStrategy = typeof valueStrategy[number]
