import { groupList, formateList } from './list'

describe('groupList', () => {
	it('should group and return an object with names grouped by the first letter', () => {
		const names = ['John', 'Alice', 'James', 'Eva', 'Eric', 'Bob', 'Emma', 'Edith']
		const expectedOutput = {
			J: ['John', 'James'],
			A: ['Alice'],
			E: ['Eva', 'Eric', 'Emma', 'Edith'], // Combine Eva, Eric, Emma, and Edith under "E"
			B: ['Bob'],
		}

		expect(groupList(names)).toEqual(expectedOutput)
	})
})

describe('formateList', () => {
	it('should format a list of names using Intl.ListFormat', () => {
		const names = ['John', 'Alice', 'James']
		const formatted = formateList(names)
		expect(formatted).toBe('John, Alice и James')
	})

	it('should handle null and return an empty string', () => {
		const nullList = null
		expect(formateList(nullList)).toBe('')
	})

	it('should handle an empty array and return an empty string', () => {
		const emptyList: string[] = []
		expect(formateList(emptyList)).toBe('')
	})
})
