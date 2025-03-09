import { KnipConfig } from 'knip'
const IGNORE_LIST = ['turbo/**', '.lintstagedrc.json', '.eslintrc.js', '**/package.json']

const config: KnipConfig = {
	// unlisted - these are transitive dependencies, from our other packages
	exclude: ['unlisted'],
	ignoreWorkspaces: [
		'plop-templates',
		'packages/jest-config',
		'packages/tsconfig',
		'packages/eslint-config',
	],
	ignoreDependencies: [
		'@turbo/gen',
		'@swc/jest',
		'jest-environment-jsdom',
		'@testing-library/jest-dom',
	],
	workspaces: {
		'apps/*': {
			entry: ['src/index.tsx', 'src/mocks/browser.ts'],
			project: ['src/**'],
			ignore: IGNORE_LIST,
			jest: true,
		},
		'packages/*': {
			entry: ['src/index.ts'],
			project: ['src/**'],
			ignore: IGNORE_LIST,
			jest: true,
		},
	},
}

export default config
