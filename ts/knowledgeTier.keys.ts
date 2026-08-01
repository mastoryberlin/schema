export const knowledgeTier = ['edusys', 'org', 'account', 'student', 'info'] as const
export type KnowledgeTier = typeof knowledgeTier[number]
