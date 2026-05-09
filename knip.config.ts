import type { KnipConfig } from 'knip'

const IGNORE_LIST = ['.lintstagedrc.json', '**/package.json']

const config: KnipConfig = {
	// unlisted - these are transitive dependencies, from our other packages
	exclude: ['unlisted'],
	ignoreDependencies: [
		'jest',
		'@turbo/gen',
		'jest-fixed-jsdom',
		'check-dependency-version-consistency',
	],
	workspaces: {
		'apps/*': {
			// MSW browser entry; Vite already supplies app entry
			entry: ['src/mocks/browser.ts'],
			project: ['src/**'],
			ignore: IGNORE_LIST,
			jest: true,
		},
		'packages/*': {
			project: ['src/**'],
			ignore: IGNORE_LIST,
			jest: true,
		},
	},
}

export default config
