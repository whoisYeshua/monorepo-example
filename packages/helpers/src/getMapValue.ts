/**
 * Function to get a value from an object by key.
 * The main purpose of this function is to avoid unnecessary TypeScript key checks when accessing an object:
 *
 * `const value = exampleMap[key as keyof typeof exampleMap]`
 */
export const getMapValue = <T extends object>(map: T, key?: string | number | null) =>
	map[key as keyof T]
