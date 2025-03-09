import { isNotEmpty } from '../isEmpty'

/**
 * Truncates text to the specified maximum length and adds an ellipsis if the text is longer.
 * In UI, it's preferable to use `text-overflow: ellipsis;` or `-webkit-line-clamp` until there's a need to truncate to a specific length
 *
 * @param text Source text for truncation
 * @param maxLength Maximum string length
 * @returns Truncated text with ellipsis if it exceeds maxLength, or original text if it's shorter
 */
export const truncateText = (text: string, maxLength: number) => {
	if (text.length > maxLength) {
		return `${text.slice(0, maxLength).trim()}...`
	}

	return text
}

/** {@link https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions Forbidden characters in Windows file names} */
const windowsforbiddenChars = /["*/:<>?\\|]/g

/**
 * Replaces forbidden characters in a filename with spaces
 *
 * @param fileName filename
 * @param replaceString text to replace forbidden characters with
 * @returns String where forbidden characters are replaced with spaces
 */
export const replaceForbiddenChars = (fileName: string, replaceString = ' ') =>
	fileName.replaceAll(windowsforbiddenChars, replaceString).trim()

/**
 * Joins an array of strings into a single string with the specified separator, ignoring empty, `null`, and `undefined` values.
 *
 * @param strings - Array of strings to join
 * @param separator - Separator used when joining strings. Space by default.
 * @returns Joined string with applied separator
 */
export const getSeparatedText = (strings: Array<string | null | undefined>, separator = ' ') =>
	strings.filter((string) => isNotEmpty(string)).join(separator)

/** Replaces HTML Entity non-breaking space (&nbsp;) with regular spaces */
export const replaceNbsp = (str?: string | null) => str?.replaceAll('&nbsp;', ' ') ?? ''
