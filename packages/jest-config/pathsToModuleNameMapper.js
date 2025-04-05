// @ts-check

/**
 * @typedef {import('typescript').CompilerOptions} CompilerOptions
 * @typedef {Exclude<CompilerOptions['paths'], undefined>} TsPathMapping
 * @typedef {import('@jest/types').Config.InitialOptions['moduleNameMapper']} JestPathMapping
 */

/**
 * Escapes regular expression special characters within a string.
 *
 * @param {string} str - The string to be escaped.
 * @returns {string} The escaped string.
 */
const escapeRegex = (str) => str.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&')

/**
 * Transforms TypeScript path mappings to Jest moduleNameMapper format.
 * @see {@link https://github.com/kulshekhar/ts-jest/blob/9f1439a97588ddfb32abb75003041835877fc910/src/config/paths-to-module-name-mapper.ts | ts-jest GitHub repo}
 *
 * @param {TsPathMapping} mapping - The TypeScript path mapping to convert.
 * @param {{ prefix?: string }} [opts={}] - Options to adjust the output, with an optional prefix.
 * @returns {JestPathMapping} The Jest moduleNameMapper representation of the TypeScript path mapping.
 */
const pathsToModuleNameMapper = (mapping, { prefix = '' } = {}) => {
	/** @type {JestPathMapping} */
	const jestMap = {}

	for (const fromPath of Object.keys(mapping)) {
		const toPaths = mapping[fromPath]
		// check that we have only one target path
		if (toPaths.length === 0) {
			console.warn(`NotMappingPathWithEmptyMap: ${fromPath}`)

			continue
		}

		// split with '*'
		const segments = fromPath.split(/\*/g)
		if (segments.length === 1) {
			const paths = toPaths.map((target) => {
				const enrichedPrefix = prefix !== '' && !prefix.endsWith('/') ? `${prefix}/` : prefix

				return `${enrichedPrefix}${target}`
			})
			const cjsPattern = `^${escapeRegex(fromPath)}$`
			jestMap[cjsPattern] = paths.length === 1 ? paths[0] : paths
		} else if (segments.length === 2) {
			const paths = toPaths.map((target) => {
				const enrichedTarget =
					target.startsWith('./') && prefix !== ''
						? target.substring(target.indexOf('/') + 1)
						: target
				const enrichedPrefix = prefix !== '' && !prefix.endsWith('/') ? `${prefix}/` : prefix

				return `${enrichedPrefix}${enrichedTarget.replace(/\*/g, '$1')}`
			})

			const cjsPattern = `^${escapeRegex(segments[0])}(.*)${escapeRegex(segments[1])}$`
			jestMap[cjsPattern] = paths.length === 1 ? paths[0] : paths
		} else {
			console.warn(`NotMappingMultiStarPath: ${fromPath}`)
		}
	}

	return jestMap
}

export default pathsToModuleNameMapper
