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
}

const config = mergeWithBase(packageConfig)

export default config
