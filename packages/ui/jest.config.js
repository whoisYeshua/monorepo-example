/* eslint-disable @typescript-eslint/no-require-imports -- CJS file */
// @ts-check
const { mergeWithBase } = require('@monorepo-example/jest-config')

const { name } = require('./package.json')

/** @type {import('jest').Config} */
const packageConfig = {
	displayName: name,
}

const config = mergeWithBase(packageConfig)

module.exports = config
