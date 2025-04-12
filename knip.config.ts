import { KnipConfig } from 'knip'
const IGNORE_LIST = ['turbo/**', '.lintstagedrc.json', '.eslintrc.cjs', '**/package.json']

const config: KnipConfig = {
	// unlisted - these are transitive dependencies, from our other packages
	exclude: ['unlisted'],
	ignoreDependencies: [
		'@turbo/gen',
		'@swc/jest',
		'jest-fixed-jsdom',
		'@testing-library/jest-dom',
		'check-dependency-version-consistency',
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
