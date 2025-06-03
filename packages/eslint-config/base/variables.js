// @ts-check
// This file contains variable-related rules (from airbnb config)

/** @type {import('eslint').Linter.Config[]} */
const config = [
	{
		name: 'variables-monorepo-example',
		rules: {
			// require function expressions to have a name
			// https://eslint.org/docs/rules/func-names
			'func-names': 'warn',

			// disallow modifying variables that are declared using const
			// https://eslint.org/docs/rules/no-const-assign
			'no-const-assign': 'error',

			// require let or const instead of var
			// https://eslint.org/docs/rules/no-var
			'no-var': 'error',

			// suggest using of const declaration for variables that are never modified after declared
			// https://eslint.org/docs/rules/prefer-const
			'prefer-const': [
				'error',
				{
					destructuring: 'any',
					ignoreReadBeforeAssign: true,
				},
			],

			// disallow deletion of variables
			// https://eslint.org/docs/rules/no-delete-var
			'no-delete-var': 'error',

			// disallow labels that share a name with a variable
			// https://eslint.org/docs/rules/no-label-var
			'no-label-var': 'error',

			// disallow specific globals
			// https://eslint.org/docs/rules/no-restricted-globals
			// https://www.npmjs.com/package/confusing-browser-globals
			'no-restricted-globals': [
				'error',
				{
					name: 'isFinite',
					message:
						'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
				},
				{
					name: 'isNaN',
					message:
						'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
				},
				'addEventListener',
				'blur',
				'close',
				'closed',
				'confirm',
				'defaultStatus',
				'defaultstatus',
				'event',
				'external',
				'find',
				'focus',
				'frameElement',
				'frames',
				'history',
				'innerHeight',
				'innerWidth',
				'length',
				'location',
				'locationbar',
				'menubar',
				'moveBy',
				'moveTo',
				'name',
				'onblur',
				'onerror',
				'onfocus',
				'onload',
				'onresize',
				'onunload',
				'open',
				'opener',
				'opera',
				'outerHeight',
				'outerWidth',
				'pageXOffset',
				'pageYOffset',
				'parent',
				'print',
				'removeEventListener',
				'resizeBy',
				'resizeTo',
				'screen',
				'screenLeft',
				'screenTop',
				'screenX',
				'screenY',
				'scroll',
				'scrollbars',
				'scrollBy',
				'scrollTo',
				'scrollX',
				'scrollY',
				'self',
				'status',
				'statusbar',
				'stop',
				'toolbar',
				'top',
			],

			// disallow declaration of variables already declared in the outer scope
			// https://eslint.org/docs/latest/rules/no-shadow
			// https://typescript-eslint.io/rules/no-shadow/ (looks like `@typescript-eslint` version could be disabled according to https://eslint.org/blog/2025/05/eslint-v9.28.0-released/, we are waiting for `@typescript-eslint` rule deprecation)
			'no-shadow': 'off',
			'@typescript-eslint/no-shadow': 'error',

			// disallow shadowing of names such as arguments
			// https://eslint.org/docs/latest/rules/no-shadow-restricted-names
			'no-shadow-restricted-names': ['error', { reportGlobalThis: true }],

			// disallow use of undefined when initializing variables
			// https://eslint.org/docs/latest/rules/no-undef-init
			'no-undef-init': 'error',

			// This rule allows `leadingUnderscore` and `trailingUnderscore` settings. However, the existing `no-underscore-dangle` rule already takes care of this.
			// https://typescript-eslint.io/rules/naming-convention
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

			// require assignment operator shorthand where possible or prohibit it entirely
			// https://eslint.org/docs/rules/operator-assignment
			'operator-assignment': ['error', 'always'],
		},
	},
]

export default config
