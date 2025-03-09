const { rules: baseBestPracticesRules } = require('eslint-config-airbnb-base/rules/best-practices')
const { rules: baseES6Rules } = require('eslint-config-airbnb-base/rules/es6')
const { rules: baseImportsRules } = require('eslint-config-airbnb-base/rules/imports')
const { rules: baseStyleRules } = require('eslint-config-airbnb-base/rules/style')
const { rules: baseVariablesRules } = require('eslint-config-airbnb-base/rules/variables')

module.exports = {
	extends: ['airbnb-base'],
	rules: {
		// Disallow reassignment of function parameters (часто будет мешать и все кейсы в ignorePropertyModificationsFor не учесть)
		// rule: https://eslint.org/docs/rules/no-param-reassign.html
		'no-param-reassign': 'off',

		// Disallow use of unary operators, ++ and -- (лишнее органичение, которое можно держать в голове)
		// https://eslint.org/docs/rules/no-plusplus
		'no-plusplus': 'off',

		// Disallow certain syntax forms (мутные правила, которые отчасти уже устарели)
		// https://eslint.org/docs/rules/no-restricted-syntax
		'no-restricted-syntax': 'off',

		// Disallow use of variables before they are defined (Зачастую будет мешать (например, при styled) в контексе react приложения, где все подобные переменные, функции уже проинициализированы при старте приложения)
		// https://typescript-eslint.io/rules/no-use-before-define
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'off',

		// Forbid the use of extraneous packages (нам важны только обычные dependencies, которые не объявлены в пакетном package.json, devDependencies можно юзать, частый кейс - в конфигурационных файлах dev инструментов)
		// https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

		// Require modules with a single export to use a default export (стараемся как можно меньше юзать default export, поэтому отключаем)
		// https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
		'import/prefer-default-export': 'off',

		/* rules from https://github.com/Kenneth-Sills/eslint-config-airbnb-typescript */

		camelcase: 'off',
		// The `@typescript-eslint/naming-convention` rule allows `leadingUnderscore` and `trailingUnderscore` settings. However, the existing `no-underscore-dangle` rule already takes care of this.
		'@typescript-eslint/naming-convention': [
			'error',
			// Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables (23.10)
			{
				selector: 'variable',
				format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
			},
			// Allow camelCase functions (23.2), and PascalCase functions (23.8)
			{
				selector: 'function',
				format: ['camelCase', 'PascalCase'],
			},
			// Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make TypeScript recommendations, we are assuming this rule would similarly apply to anything "type like", including interfaces, type aliases, and enums
			{
				selector: 'typeLike',
				format: ['PascalCase'],
			},
		],

		// Enforce default parameters to be last
		// https://eslint.org/docs/rules/default-param-last
		'default-param-last': 'off',
		'@typescript-eslint/default-param-last': baseBestPracticesRules['default-param-last'],

		// Encourages use of dot notation whenever possible
		// https://eslint.org/docs/rules/dot-notation
		'dot-notation': 'off',
		'@typescript-eslint/dot-notation': baseBestPracticesRules['dot-notation'],

		// disallow use of the Array constructor
		// https://eslint.org/docs/latest/rules/no-array-constructor
		'no-array-constructor': 'off',
		'@typescript-eslint/no-array-constructor': baseStyleRules['no-array-constructor'],

		// disallow empty functions, except for standalone funcs/arrows
		// https://eslint.org/docs/rules/no-empty-function
		'no-empty-function': 'off',
		'@typescript-eslint/no-empty-function': baseBestPracticesRules['no-empty-function'],

		// disallow use of new operator for Function object
		// https://eslint.org/docs/rules/no-new-func
		'no-new-func': 'off',
		// disallow use of eval()-like methods
		// https://eslint.org/docs/rules/no-implied-eval
		'no-implied-eval': 'off',
		'@typescript-eslint/no-implied-eval': baseBestPracticesRules['no-implied-eval'],

		// disallow creation of functions within loops
		// https://eslint.org/docs/rules/no-loop-func
		'no-loop-func': 'off',
		'@typescript-eslint/no-loop-func': baseBestPracticesRules['no-loop-func'],

		// disallow magic numbers
		// https://eslint.org/docs/rules/no-magic-numbers
		'no-magic-numbers': 'off',
		'@typescript-eslint/no-magic-numbers': baseBestPracticesRules['no-magic-numbers'],

		// disallow declaration of variables already declared in the outer scope
		// https://eslint.org/docs/latest/rules/no-shadow
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': baseVariablesRules['no-shadow'],

		// restrict what can be thrown as an exception
		// https://eslint.org/docs/rules/no-throw-literal
		'no-throw-literal': 'off',
		'@typescript-eslint/only-throw-error': baseBestPracticesRules['no-throw-literal'],

		// disallow usage of expressions in statement position
		// https://eslint.org/docs/rules/no-unused-expressions
		'no-unused-expressions': 'off',
		'@typescript-eslint/no-unused-expressions': baseBestPracticesRules['no-unused-expressions'],

		// disallow unnecessary constructor
		// https://eslint.org/docs/rules/no-useless-constructor
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-useless-constructor': baseES6Rules['no-useless-constructor'],

		// disallow redundant `return await`
		// https://eslint.org/docs/rules/no-return-await
		'no-return-await': 'off',
		'@typescript-eslint/return-await': [baseBestPracticesRules['no-return-await'], 'in-try-catch'],

		// enforce that class methods use "this" (The base rule works fine with Typescript, but the Typescript version has additional options)
		// https://eslint.org/docs/rules/class-methods-use-this
		'class-methods-use-this': 'off',
		'@typescript-eslint/class-methods-use-this': [
			baseBestPracticesRules['class-methods-use-this'][0],
			{
				...baseBestPracticesRules['class-methods-use-this'][1],
			},
		],

		// Append 'ts' and 'tsx' to Airbnb 'import/extensions' rule
		// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
		'import/extensions': [
			baseImportsRules['import/extensions'][0],
			baseImportsRules['import/extensions'][1],
			{
				...baseImportsRules['import/extensions'][2],
				ts: 'never',
				tsx: 'never',
			},
		],
	},
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				// The following rules are enabled in Airbnb config, but are already checked (more thoroughly) by the TypeScript compiler
				// Some of the rules also fail in TypeScript files, for example: https://github.com/typescript-eslint/typescript-eslint/issues/662#issuecomment-507081586
				// Rules are inspired by: https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/src/configs/eslint-recommended.ts
				'constructor-super': 'off',
				'getter-return': 'off',
				'no-const-assign': 'off',
				'no-dupe-args': 'off',
				'no-dupe-class-members': 'off',
				'no-dupe-keys': 'off',
				'no-func-assign': 'off',
				'no-import-assign': 'off',
				'no-new-symbol': 'off',
				'no-obj-calls': 'off',
				'no-redeclare': 'off',
				'no-setter-return': 'off',
				'no-this-before-super': 'off',
				'no-undef': 'off',
				'no-unsafe-negation': 'off',
				'no-unused-vars': 'off',
				'valid-typeof': 'off',
				// The following rules are enabled in Airbnb config, but are recommended to be disabled within TypeScript projects
				// See: https://github.com/typescript-eslint/typescript-eslint/blob/13583e65f5973da2a7ae8384493c5e00014db51b/docs/linting/TROUBLESHOOTING.md#eslint-plugin-import
				'import/named': 'off',
				'import/no-named-as-default-member': 'off',
				// Disable `import/no-unresolved` (1. It requires additional configuration, which may be different for monorepo's, webpack usage, etc. 2. The rule offers little value in a TypeScript world, as the TypeScript compiler will catch these errors)
				'import/no-unresolved': 'off',
			},
		},
		{
			files: ['**/*.test.{ts,tsx}', '**/testUtil.tsx'],
			rules: {
				'import/no-extraneous-dependencies': 'off',
			},
		},
	],
}
