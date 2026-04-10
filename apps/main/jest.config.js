// @ts-check
import path from 'node:path'
import {
	defineConfig,
	mergeConfig,
	pathsToModuleNameMapper,
	sharedConfig,
} from '@monorepo-example/jest-config'

import packageJson from './package.json' with { type: 'json' }
import tsConfig from './tsconfig.json' with { type: 'json' }

const packageConfig = defineConfig({
	displayName: packageJson.name,
	moduleNameMapper: pathsToModuleNameMapper(tsConfig.compilerOptions.paths, {
		prefix: path.join('<rootDir>', tsConfig.compilerOptions.baseUrl),
	}),
	transformIgnorePatterns: ['node_modules/(?!until-async|rettime)'], // Jest doesn't support require ESM and we have issues with msw (https://github.com/mswjs/msw/issues/2591 & https://github.com/jestjs/jest/issues/15275)
})

export default mergeConfig(sharedConfig, packageConfig)
