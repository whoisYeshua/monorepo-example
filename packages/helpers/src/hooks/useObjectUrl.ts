import { useEffect, useState } from 'react'

/**
 * @description React Hook that takes a `File`, `Blob`, or `MediaSource` instance and
 * creates a URL representing it, providing a state object containing the file
 * with a set function to change the file object. When the component unmounts, the URL is revoked
 * @param {(File | Blob | MediaSource)} initialObject - object containing the file
 */
export const useObjectUrl = (initialObject: File | Blob | MediaSource | null) => {
	const [objectUrl, setObjectUrl] = useState<null | string>(null)

	const [object, setObject] = useState<File | Blob | MediaSource | null>(initialObject)

	useEffect(() => {
		if (!object) return

		const url = URL.createObjectURL(object)
		setObjectUrl(url)

		// eslint-disable-next-line consistent-return -- return is needed for cleanup function
		return () => {
			URL.revokeObjectURL(url)
			setObjectUrl(null)
		}
	}, [object])

	return { objectUrl, object, setObject }
}
