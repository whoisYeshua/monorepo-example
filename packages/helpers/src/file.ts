/**
 * Converts base64 to Blob
 * @param base64Data string in base64
 */
export const convertBase64ToBlob = (base64Data: string) =>
	fetch(base64Data).then((res) => res.blob())

/**
 * Converts json object to Blob
 * @param data {Record<PropertyKey, unknown>} json object
 */
export const convertJsonObjectToBlob = (data: Record<PropertyKey, unknown>) => {
	const json = JSON.stringify(data)
	return new Blob([json], { type: 'application/json' })
}
