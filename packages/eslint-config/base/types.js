// @ts-check
// This file contains TypeScript-specific rules

/** @type {import('eslint').Linter.Config[]} */
const config = [
	{
		name: 'types-monorepo-example',
		rules: {
			/* import type rules */

			// Enforce consistent usage of type imports
			// https://typescript-eslint.io/rules/consistent-type-imports
			'@typescript-eslint/consistent-type-imports': 'warn',

			// Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers
			// https://typescript-eslint.io/rules/no-import-type-side-effects/
			'@typescript-eslint/no-import-type-side-effects': 'error',

			// mark an import as a type-only import by adding a "kind" marker to the import (forcing a dedicated import line for types, not an inline one)
			// https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
			'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],

			/* rest type aware rules */

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
