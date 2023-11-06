/* eslint-disable @typescript-eslint/no-var-requires -- CJS файл */
// @ts-check
const path = require('node:path')
const { mergeWithBase, pathsToModuleNameMapper } = require('@monorepo-example/jest-config')

const { compilerOptions } = require('./tsconfig.json')

/** @type {import('jest').Config} */
const packageConfig = {
	displayName: 'main',
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: path.join('<rootDir>', compilerOptions.baseUrl),
	}),
}

const config = mergeWithBase(packageConfig)

module.exports = config
