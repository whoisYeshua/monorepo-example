export const createSortByFieldOrder =
	<TargetObject extends object, Field extends keyof TargetObject = keyof TargetObject>(
		sortOrder: string[],
		sortedField?: Field
	) =>
	(a: TargetObject, b: TargetObject) => {
		const field = sortedField ?? 'code'

		// @ts-expect-error -- JS will work without errors if code is null | undefined and expression returns -1 - we handle this case later
		const indexA = sortOrder.indexOf(a[field])
		// @ts-expect-error -- JS will work without errors if code is null | undefined and expression returns -1 - we handle this case later
		const indexB = sortOrder.indexOf(b[field])

		// If both codes are found, sort by their indices
		if (indexA !== -1 && indexB !== -1) return indexA - indexB

		// If only one code is found, place it first
		if (indexA !== -1) return -1
		if (indexB !== -1) return 1

		// If no codes are found, keep their original order
		return 0
	}
