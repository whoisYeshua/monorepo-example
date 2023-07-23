// // @ts-check
// const { mergeDeepLeft } = require('ramda')

// /** @type {import('jest').Config} */
// const sharedConfig = {
// 	testEnvironment: 'jsdom',
// 	transform: {
// 		'^.+\\.tsx?$': [
// 			'@swc/jest',
// 			{
// 				jsc: {
// 					parser: {
// 						syntax: 'typescript',
// 						jsx: true,
// 					},
// 					transform: {
// 						react: {
// 							runtime: 'automatic',
// 						},
// 					},
// 				},
// 			},
// 		],
// 	},
// 	moduleNameMapper: {
// 		'^\\$atoms/(.*)$': '<rootDir>/packages/ui/src/atoms/$1',
// 		'^\\$atoms$': '<rootDir>/packages/ui/src/atoms',
// 		'^react($|/.+)': '<rootDir>/node_modules/react$1',
// 	},
// 	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
// 	resetMocks: true,
// }

// /** @type {import('jest').Config} */
// const config = {
// 	projects: [
// 		{
// 			displayName: 'main',
// 			testMatch: ['<rootDir>/apps/main/**/*.test.{ts,tsx}'],
// 			moduleNameMapper: {
// 				'^\\$components/(.*)$': '<rootDir>/apps/main/src/components/$1',
// 				'^\\$components$': '<rootDir>/apps/main/src/components',
// 			},
// 		},
// 		{
// 			displayName: 'widget',
// 			testMatch: ['<rootDir>/apps/widget/**/*.test.{ts,tsx}'],
// 			moduleNameMapper: {
// 				'^\\$components/(.*)$': '<rootDir>/apps/widget/src/components/$1',
// 				'^\\$components$': '<rootDir>/apps/widget/src/components',
// 			},
// 		},
// 		{
// 			displayName: 'helpers',
// 			testMatch: ['<rootDir>/packages/helpers/**/*.test.{ts,tsx}'],
// 		},
// 	].map(project => mergeDeepLeft(project, sharedConfig)),
// }

// module.exports = config
