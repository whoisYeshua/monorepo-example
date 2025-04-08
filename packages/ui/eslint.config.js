// @ts-check
import { defineMonorepoConfig } from '@monorepo-example/eslint-config'

export default [
	...defineMonorepoConfig({ dirname: import.meta.dirname }),
	{
		name: '@monorepo-example/ui',
		rules: {
			// Enforce which files can be imported in a given folder (will ensure the proper use of Atomic Design https://github.com/diegohaz/arc/wiki/Atomic-Design)
			// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
			'import/no-restricted-paths': [
				'error',
				{
					zones: [
						{
							target: '**/src/atoms/**/!(*.stories|*.test).tsx',
							from: ['**/src/molecules/**/*', '**/src/organisms/**/*', '**/src/atoms/**/*'],
						},
						{
							target: '**/src/molecules/**/!(*.stories|*.test).tsx',
							from: ['**/src/molecules/**/*', '**/src/organisms/**/*'],
						},
					],
				},
			],
		},
	},
]
