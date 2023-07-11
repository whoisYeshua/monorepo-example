module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier',
	],
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': 'warn',
		'import/order': [
			'error',
			{
				groups: [['builtin', 'external'], ['internal', 'parent'], ['sibling', 'index'], 'type'],
				pathGroups: [
					{
						pattern: 'react*',
						group: 'external',
						position: 'before',
					},
					{
						pattern: '@des-front/*',
						group: 'external',
						position: 'after',
					},
				],
				pathGroupsExcludedImportTypes: ['type'],
				distinctGroup: false,
				alphabetize: { order: 'asc', caseInsensitive: true },
				'newlines-between': 'always',
			},
		],
		'import/newline-after-import': ['warn', { considerComments: true }],
		'import/no-useless-path-segments': 'warn',
		'import/first': 'warn',
		'@typescript-eslint/consistent-type-imports': 'warn',
	},
	ignorePatterns: ['node_modules', 'dist'],
	settings: {
		'import/resolver': {
			node: true,
			typescript: true,
		},
	},
}
