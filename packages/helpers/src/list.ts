import { uniq, groupBy } from 'es-toolkit/array'

export const groupList = (names: string[]) => groupBy(uniq(names), (name) => name.trimStart()[0])

const formatter = new Intl.ListFormat('ru', { style: 'long', type: 'conjunction' })

export const formateList = (list: string[]): string => formatter.format(list)
