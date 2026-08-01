import { knowledgeTier, type KnowledgeTier } from './knowledgeTier.keys.ts'

export const documentCategory = [...knowledgeTier.map<`knowledge.${KnowledgeTier}`>(t => `knowledge.${t}`), 'classroom.worksheet', 'plan.timeline', 'topic.assessment', 'topic.bestPractice'] as const
export type DocumentCategory = typeof documentCategory[number]
