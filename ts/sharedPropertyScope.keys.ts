export const sharedPropertyScope = ['frame', 'document', 'conversation', 'profile', 'account', 'organization'] as const
export type SharedPropertyScope = typeof sharedPropertyScope[number]
