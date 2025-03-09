export const getDate = (date: string | number) => new Date(date).toLocaleDateString('ru-RU')

export const getTime = (date: string | number) =>
	new Date(date).toLocaleTimeString('ru-RU', {
		hour: '2-digit',
		minute: '2-digit',
	})
