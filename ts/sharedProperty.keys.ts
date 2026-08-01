export const sharedProperty = ['activityDuration', 'clStage', 'cognitiveLevel', 'country', 'gradeLevel', 'mathTopic', 'pedagogicalUseCase', 'standards', 'targetGroup'] as const
export type SharedProperty = typeof sharedProperty[number]
