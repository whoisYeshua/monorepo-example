module.exports = {
	root: true,
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
	},
	extends: ['@monorepo-example'],
	settings: {
		'import/resolver': {
			node: true,
			typescript: {
				project: 'packages/ui/tsconfig.json',
			},
		},
	},
	rules: {
		// Enforce which files can be imported in a given folder (обеспечит правильное использование элементов Atomic Design https://github.com/diegohaz/arc/wiki/Atomic-Design)
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
}
