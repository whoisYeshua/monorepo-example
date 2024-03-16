import { formateDate } from './date'

describe('formateDate', () => {
	it('should format a date using the dateLong format', () => {
		const dateValue = '2023-07-22T12:34:56.789Z'
		const formattedDate = formateDate(dateValue)
		expect(formattedDate).toBe('22 июля 2023 г.')
	})

	it('should format a date using the dateShort format', () => {
		const dateValue = '2023-07-22T12:34:56.789Z'
		const formattedDate = formateDate(dateValue, 'dateShort')
		expect(formattedDate).toBe('22.07.2023')
	})

	it('should format a date using the dateTime format', () => {
		const dateValue = '2023-07-22T12:34:56.789Z'
		const formattedDate = formateDate(dateValue, 'dateTime')
		expect(formattedDate).toBe('22 июля 2023 г. в 15:34')
	})

	it('should handle null and return an empty string', () => {
		const nullDate = null
		expect(formateDate(nullDate)).toBe('')
	})

	it('should handle an empty string and return an empty string', () => {
		const emptyDate = ''
		expect(formateDate(emptyDate)).toBe('')
	})
})
