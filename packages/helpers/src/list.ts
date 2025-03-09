import { uniq, groupBy } from 'ramda'

export const groupList = (names: string[]) => {
	const uniqValues = uniq(names)
	const byName = groupBy((name: string) => name.trimStart()[0])
	return byName(uniqValues)
}

const formatter = new Intl.ListFormat('ru', { style: 'long', type: 'conjunction' })

export const formateList = (list: string[]): string => formatter.format(list)
