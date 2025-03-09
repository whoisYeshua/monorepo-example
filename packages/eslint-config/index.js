module.exports = {
	ignorePatterns: ['node_modules', 'dist', 'public', 'coverage', '.eslintrc.js'],
	env: {
		browser: true,
		es2024: true,
		node: true,
	},
	parserOptions: {
		// Override @typescript-eslint 2018 default  https://typescript-eslint.io/packages/parser/#ecmaversion
		ecmaVersion: 'latest',
		projectService: {
			allowDefaultProject: ['*.js'],
		},
	},
	extends: [
		require.resolve('./airbnb'),
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		require.resolve('./react'),
		require.resolve('./unicorn'),
		'prettier',
	],
	plugins: ['@eslint-community/eslint-comments'],
	settings: {
		'import/resolver': {
			node: true,
			typescript: true,
		},
	},
	rules: {
		'no-restricted-syntax': [
			'error',
			{
				selector: 'TSEnumDeclaration',
				message:
					'Why we do not use enum: https://gist.github.com/Akiyamka/de16fc1f887e187258b657555f54506b',
			},
		],

		// This rule warns ESLint directive (especially for disable directives) comments without description
		// https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html
		'@eslint-community/eslint-comments/require-description': ['error', { ignore: [] }],

		// Enforce consistent usage of type imports
		// https://typescript-eslint.io/rules/consistent-type-imports
		'@typescript-eslint/consistent-type-imports': 'warn',

		// Require that function overload signatures be consecutive
		// https://typescript-eslint.io/rules/adjacent-overload-signatures
		'@typescript-eslint/adjacent-overload-signatures': 'error',

		// Disallow the declaration of empty interfaces
		// https://typescript-eslint.io/rules/no-empty-interface
		'@typescript-eslint/no-empty-interface': 'error',

		// Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
		// https://typescript-eslint.io/rules/no-inferrable-types
		'@typescript-eslint/no-inferrable-types': 'error',

		// Disallow non-null assertions using the ! postfix operator
		// https://typescript-eslint.io/rules/no-non-null-assertion
		'@typescript-eslint/no-non-null-assertion': 'warn',

		// Require using `namespace` keyword over `module` keyword to declare custom TypeScript module (Не используем namespace и уж тем более устаревший module)
		// https://typescript-eslint.io/rules/prefer-namespace-keyword/
		'@typescript-eslint/prefer-namespace-keyword': 'off',

		// Disallow unused variables (должен отлавливаться самим typescript - `noUnusedLocals` & `noUnusedParameters`, в некоторых кейсах ругался на объектные енамки, которые исползовались для получения типа ключей этого объекта и больше нигде)
		// https://typescript-eslint.io/rules/no-unused-vars
		'@typescript-eslint/no-unused-vars': 'off',

		// Disallow non-import statements appearing before import statements
		// https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/first.md
		'import/first': 'warn',

		// Require a newline after the last import/require in a group
		// https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
		'import/newline-after-import': ['warn', { considerComments: true }],

		// Ensures that there are no useless path segments
		// https://github.com/import-js/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
		'import/no-useless-path-segments': 'warn',

		// Enforce a convention in the order of import statements
		// https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/order.md
		'import/order': [
			'error',
			{
				groups: [['builtin', 'external'], ['internal', 'parent'], ['sibling', 'index'], 'type'],
				pathGroups: [
					{ pattern: 'react*', group: 'external', position: 'before' },
					{ pattern: '@monorepo-example/*', group: 'external', position: 'after' },
				],
				pathGroupsExcludedImportTypes: ['type'],
				distinctGroup: false,
				alphabetize: { order: 'asc', caseInsensitive: true },
				'newlines-between': 'always',
			},
		],

		// Мутное и очень тяжелое по перфу правило
		// https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/namespace.md
		'import/namespace': 'off',
	},
}
