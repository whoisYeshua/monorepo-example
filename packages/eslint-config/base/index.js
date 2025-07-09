// @ts-check
import jseslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import importPlugin from 'eslint-plugin-import'

import typesConfig from './types.js'
import bestPracticesConfig from './best-practices.js'
import errorsConfig from './errors.js'
import variablesConfig from './variables.js'
import importsConfig from './imports.js'

/** @type {import('eslint').Linter.Config[]} */
// @ts-expect-error - TypeScript-ESLint Config type is incompatible with ESLint's native Linter.Config type
const tseslintConfigs = [...tseslint.configs.stylistic, ...tseslint.configs.recommended]

/** @type {import('eslint').Linter.Config[]} */
const config = [
	jseslint.configs.recommended,
	...tseslintConfigs,
	importPlugin.flatConfigs.recommended,
	importPlugin.flatConfigs.typescript,
	...typesConfig,
	...bestPracticesConfig,
	...errorsConfig,
	...variablesConfig,
	...importsConfig,
]

export default config
