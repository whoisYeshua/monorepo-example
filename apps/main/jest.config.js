// @ts-check
import path from 'node:path'
import { mergeWithBase, pathsToModuleNameMapper } from '@monorepo-example/jest-config'

import packageJson from './package.json' with { type: 'json' }
import tsConfig from './tsconfig.json' with { type: 'json' }

/** @type {import('jest').Config} */
const packageConfig = {
	displayName: packageJson.name,
	moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, {
		prefix: path.join('<rootDir>', tsConfig.compilerOptions.baseUrl),
	}),
	transformIgnorePatterns: ['node_modules/(?!until-async)'], // Jest doesn't support require ESM and we have issues with msw (https://github.com/mswjs/msw/issues/2591 & https://github.com/jestjs/jest/issues/15275)
}

const config = mergeWithBase(packageConfig)

export default config
