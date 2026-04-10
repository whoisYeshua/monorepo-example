// @ts-check
import path from 'node:path'
import { defineConfig, mergeConfig } from 'jest'

/**
 * Returns the absolute path to the file relative to the `jest-config` package folder
 * @param {string} filePath Relative path to the file from the `jest-config` package folder
 * @returns {string}
 */
const fromJestConfigPackageRoot = (filePath) => path.join(import.meta.dirname, filePath)

const sharedConfig = defineConfig({
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
		'^.+\\.[cm]?[jt]sx?$': [
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
	moduleFileExtensions: ['js', 'mjs', 'ts', 'tsx'],
	setupFilesAfterEnv: [fromJestConfigPackageRoot('./setupTests.ts')],
	resetMocks: true,
})

export { sharedConfig, defineConfig, mergeConfig }
