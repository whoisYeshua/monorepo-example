/**
 * Formats a number according to the specified locale and formatting options.
 *
 * @param {number} value - The number to format
 * @param {number} [fraction=1] - Number of digits after decimal point
 * @param {Intl.NumberFormatOptions} [options] - Additional formatting options
 * @returns {string} The formatted number string
 *
 * @example toFormattedNumber(1234.567, 2) // Returns "1 234,57"
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters|NumberFormat Options}
 */
export const toFormattedNumber = (
	value: number,
	fraction = 1,
	options?: Intl.NumberFormatOptions
) =>
	Intl.NumberFormat('ru-RU', {
		...options,
		maximumFractionDigits: fraction,
	}).format(value)

/* Formatted output of percentages */
export const toPercent = (n: number, fraction?: number, options?: Intl.NumberFormatOptions) =>
	`${toFormattedNumber(n, fraction, options)}%`
