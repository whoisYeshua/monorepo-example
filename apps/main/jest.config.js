/* eslint-disable @typescript-eslint/no-var-requires -- CJS файл */
// @ts-check
const { mergeWithBase } = require('@monorepo-example/jest-config')

/** @type {import('jest').Config} */
const packageConfig = {
	displayName: 'main',
	moduleNameMapper: {
		'^\\$components/(.*)$': '<rootDir>/src/components/$1',
		'^\\$components$': '<rootDir>/src/components',
	},
}

const config = mergeWithBase(packageConfig)

module.exports = config
