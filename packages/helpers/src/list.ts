import * as R from 'ramda'

export const groupList = (names: string[]) => {
	const uniqValues = R.uniq(names)
	const byName = R.groupBy((name: string) => name.trimStart()[0])
	return byName(uniqValues)
}

const formatter = new Intl.ListFormat('ru', { style: 'long', type: 'conjunction' })

export const formateList = (list?: string[] | null): string => (list ? formatter.format(list) : '')
