// @ts-check
import commentsPlugin from '@eslint-community/eslint-plugin-eslint-comments/configs'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

import baseConfig from './base/index.js'
import reactConfig from './react.js'
import unicornConfig from './unicorn.js'

/** @type {import('eslint').Linter.Config[]} */
const config = [
	globalIgnores(
		['node_modules', 'dist', 'public', 'coverage', 'eslint.config.{js,mjs,ts}'],
		'globalIgnores-monorepo-example'
	),
	...baseConfig,
	...reactConfig,
	...unicornConfig,
	eslintConfigPrettier,
	{
		name: 'base-settings',
		languageOptions: {
			ecmaVersion: 'latest',
			globals: {
				...globals?.browser,
				...globals?.es2025,
				...globals?.node,
			},
			parserOptions: {
				// Override @typescript-eslint 2018 default https://typescript-eslint.io/packages/parser/#ecmaversion
				ecmaVersion: 'latest',
				projectService: {
					allowDefaultProject: ['*.js'],
				},
			},
		},
		plugins: {
			...commentsPlugin.recommended.plugins,
		},
		settings: {
			'import/resolver': {
				node: true,
				typescript: true,
			},
		},
		rules: {
			// This rule warns ESLint directive (especially for disable directives) comments without description
			'@eslint-community/eslint-comments/require-description': ['error', { ignore: [] }],
		},
	},
]

/**
 * Defines a monorepo ESLint configuration
 * @param {Object} options - Configuration options
 * @param {string} options.dirname - Directory path for TypeScript configuration resolution
 */
export const defineMonorepoConfig = ({ dirname }) =>
	defineConfig({
		name: '@monorepo-example/eslint-config',
		languageOptions: {
			parserOptions: {
				tsconfigRootDir: dirname,
			},
		},
		extends: [config],
		settings: {
			'import/resolver': {
				typescript: { project: `${dirname}/tsconfig.json` },
			},
		},
	})

export default config
