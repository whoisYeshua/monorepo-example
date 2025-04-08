// @ts-check
// This file contains TypeScript-specific rules

/** @type {import('eslint').Linter.Config[]} */
const config = [
	{
		name: 'types-monorepo-example',
		rules: {
			// Enforce consistent usage of type imports
			// https://typescript-eslint.io/rules/consistent-type-imports
			'@typescript-eslint/consistent-type-imports': 'warn',

			// Require that function overload signatures be consecutive
			// https://typescript-eslint.io/rules/adjacent-overload-signatures
			'@typescript-eslint/adjacent-overload-signatures': 'error',

			// Disallow accidentally using the "empty object" type
			// https://typescript-eslint.io/rules/no-empty-object-type
			'@typescript-eslint/no-empty-object-type': 'error',

			// Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean
			// https://typescript-eslint.io/rules/no-inferrable-types
			'@typescript-eslint/no-inferrable-types': 'error',

			// Disallow non-null assertions using the ! postfix operator
			// https://typescript-eslint.io/rules/no-non-null-assertion
			'@typescript-eslint/no-non-null-assertion': 'warn',

			// Require using `namespace` keyword over `module` keyword to declare custom TypeScript module (Не используем namespace и уж тем более устаревший module)
			// https://typescript-eslint.io/rules/prefer-namespace-keyword/
			'@typescript-eslint/prefer-namespace-keyword': 'off',
		},
	},
]

export default config
