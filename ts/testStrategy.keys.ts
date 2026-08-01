export const testStrategy = ['unitTests', 'manual'] as const
export type TestStrategy = typeof testStrategy[number]
