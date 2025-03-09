// @ts-check
const path = require('node:path')
const { mergeDeepLeft } = require('ramda')

/**
 * Returns the absolute path to the file relative to the `jest-config` package folder
 * @param {string} filePath Relative path to the file from the `jest-config` package folder
 * @returns {string}
 */
const fromJestConfigPackageRoot = (filePath) => path.join(__dirname, filePath)

/** @type {import('jest').Config} */
const sharedConfig = {
	collectCoverage: false,
	collectCoverageFrom: ['<rootDir>/src/**/*.(ts|tsx)'],
	coverageDirectory: 'coverage',
	coveragePathIgnorePatterns: [
		'<rootDir>/src/api',
		'<rootDir>/src/constants',
		'<rootDir>/src/mocks',
		'<rootDir>/src/models',
		'<rootDir>/src/store/*.ts',
		'<rootDir>/src/api',
		'<rootDir>/src/*.tsx',
		'<rootDir>/src/*.ts',
		'index.ts',
		'renderer.tsx',
		'\\.d\\.ts',
	],
	coverageReporters: ['lcov', 'json', 'text'],
	coverageProvider: 'v8',
	// Env
	testEnvironment: 'jest-fixed-jsdom',
	transform: {
		'^.+\\.[jt]sx?$': [
			'@swc/jest',
			{
				jsc: {
					parser: {
						syntax: 'typescript',
						tsx: true,
					},
					target: 'es2022',
					transform: {
						react: {
							runtime: 'automatic',
						},
						optimizer: {
							globals: {
								vars: {
									'import.meta.env': 'process.env',
								},
							},
						},
					},
				},
			},
		],
	},
	moduleFileExtensions: ['js', 'ts', 'tsx'],
	setupFilesAfterEnv: [fromJestConfigPackageRoot('./setupTests.ts')],
	resetMocks: true,
}

/**
 * Merges package Jest config with the base config (Jest doesn't have a built-in config inheritance mechanism)
 * @param {import('jest').Config} packageConfig Package Jest config
 */
const mergeWithBase = (packageConfig) => mergeDeepLeft(packageConfig, sharedConfig)

module.exports = { sharedConfig, mergeWithBase }
