export const school = ['foerderschule', 'gemeinschaftsschule', 'grundschule', 'gymnasium', 'issMitOberstufe', 'issOhneOberstufe'] as const
export type School = typeof school[number]
