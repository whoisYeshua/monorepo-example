/* eslint-disable @typescript-eslint/no-require-imports -- CJS file */
// @ts-check
const path = require('node:path')
const { mergeWithBase, pathsToModuleNameMapper } = require('@monorepo-example/jest-config')

const { name } = require('./package.json')
const { compilerOptions } = require('./tsconfig.json')

/** @type {import('jest').Config} */
const packageConfig = {
	displayName: name,
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: path.join('<rootDir>', compilerOptions.baseUrl),
	}),
}

const config = mergeWithBase(packageConfig)

module.exports = config
