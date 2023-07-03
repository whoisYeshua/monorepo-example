const DATE_FORMATS = {
	dateLong: {
		dateStyle: 'long',
	},
	dateShort: {
		dateStyle: 'short',
	},
	dateTime: {
		dateStyle: 'long',
		timeStyle: 'short',
	},
} as const

type Format = keyof typeof DATE_FORMATS

export const formateDate = (value?: string | null, format: Format = 'dateLong'): string =>
	value ? new Date(value).toLocaleString('ru', DATE_FORMATS[format]) : ''
