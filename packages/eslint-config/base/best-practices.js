// @ts-check
// This file contains best-practices rules (from airbnb config)

/** @type {import('eslint').Linter.Config[]} */
const config = [
	{
		name: 'best-practices-monorepo-example',
		rules: {
			// enforces return statements in callbacks of array's methods
			// https://eslint.org/docs/rules/array-callback-return
			'array-callback-return': ['error', { allowImplicit: true }],

			// treat var statements as if they were block scoped
			// https://eslint.org/docs/rules/block-scoped-var
			'block-scoped-var': 'error',

			// enforce that class methods use "this" (The base rule works fine with Typescript, but the Typescript version has additional options)
			// https://eslint.org/docs/rules/class-methods-use-this
			// https://typescript-eslint.io/rules/class-methods-use-this/
			'class-methods-use-this': 'off',
			'@typescript-eslint/class-methods-use-this': [
				'error',
				{
					exceptMethods: [],
				},
			],

			// require return statements to either always or never specify values
			// https://eslint.org/docs/rules/consistent-return
			'consistent-return': 'error',

			// require default case in switch statements
			// https://eslint.org/docs/rules/default-case
			'default-case': ['error', { commentPattern: '^no default$' }],

			// Enforce default clauses in switch statements to be last
			// https://eslint.org/docs/rules/default-case-last
			'default-case-last': 'error',

			// Enforce default parameters to be last
			// https://eslint.org/docs/rules/default-param-last
			// https://typescript-eslint.io/rules/default-param-last/
			'default-param-last': 'off',
			'@typescript-eslint/default-param-last': 'error',

			// encourages use of dot notation whenever possible
			// https://eslint.org/docs/rules/dot-notation
			// https://typescript-eslint.io/rules/dot-notation/
			'dot-notation': 'off',
			'@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],

			// require the use of === and !==
			// https://eslint.org/docs/rules/eqeqeq
			eqeqeq: ['error', 'always', { null: 'ignore' }],

			// Require grouped accessor pairs in object literals and classes
			// https://eslint.org/docs/rules/grouped-accessor-pairs
			'grouped-accessor-pairs': 'error',

			// make sure for-in loops have an if statement
			// https://eslint.org/docs/rules/guard-for-in
			'guard-for-in': 'error',

			// enforce a maximum number of classes per file
			// https://eslint.org/docs/rules/max-classes-per-file
			'max-classes-per-file': ['error', 1],

			// disallow the use of alert, confirm, and prompt
			// https://eslint.org/docs/rules/no-alert
			'no-alert': 'warn',

			// disallow use of arguments.caller or arguments.callee
			// https://eslint.org/docs/rules/no-caller
			'no-caller': 'error',

			// disallow lexical declarations in case/default clauses
			// https://eslint.org/docs/rules/no-case-declarations
			'no-case-declarations': 'error',

			// Disallow returning value in constructor
			// https://eslint.org/docs/rules/no-constructor-return
			'no-constructor-return': 'error',

			// disallow else after a return in an if
			// https://eslint.org/docs/rules/no-else-return
			'no-else-return': ['error', { allowElseIf: false }],

			// disallow empty functions, except for standalone funcs/arrows
			// https://eslint.org/docs/rules/no-empty-function
			// https://typescript-eslint.io/rules/no-empty-function/
			'no-empty-function': 'off',
			'@typescript-eslint/no-empty-function': [
				'error',
				{
					allow: ['arrowFunctions', 'functions', 'methods'],
				},
			],

			// disallow empty destructuring patterns
			// https://eslint.org/docs/rules/no-empty-pattern
			'no-empty-pattern': 'error',

			// disallow use of eval()
			// https://eslint.org/docs/rules/no-eval
			'no-eval': 'error',

			// disallow adding to native types
			// https://eslint.org/docs/rules/no-extend-native
			'no-extend-native': 'error',

			// disallow unnecessary function binding
			// https://eslint.org/docs/rules/no-extra-bind
			'no-extra-bind': 'error',

			// disallow Unnecessary Labels
			// https://eslint.org/docs/rules/no-extra-label
			'no-extra-label': 'error',

			// disallow fallthrough of case statements
			// https://eslint.org/docs/rules/no-fallthrough
			'no-fallthrough': 'error',

			// disallow reassignments of native objects or read-only globals
			// https://eslint.org/docs/rules/no-global-assign
			'no-global-assign': ['error', { exceptions: [] }],

			// disallow usage of __iterator__ property
			// https://eslint.org/docs/rules/no-iterator
			'no-iterator': 'error',

			// disallow use of labels for anything other than loops and switches
			// https://eslint.org/docs/rules/no-labels
			'no-labels': ['error', { allowLoop: false, allowSwitch: false }],

			// disallow unnecessary nested blocks
			// https://eslint.org/docs/rules/no-lone-blocks
			'no-lone-blocks': 'error',

			// disallow creation of functions within loops
			// https://eslint.org/docs/rules/no-loop-func
			// https://typescript-eslint.io/rules/no-loop-func/
			'no-loop-func': 'off',
			'@typescript-eslint/no-loop-func': 'error',

			// disallow use of multiline strings
			// https://eslint.org/docs/rules/no-multi-str
			'no-multi-str': 'error',

			// disallow use of new operator when not part of the assignment or comparison
			// https://eslint.org/docs/rules/no-new
			'no-new': 'error',

			// disallow use of new operator for Function object
			// https://eslint.org/docs/rules/no-new-func
			'no-new-func': 'off',
			// disallow use of eval()-like methods
			// https://eslint.org/docs/rules/no-implied-eval
			'no-implied-eval': 'off',
			// cover both `no-implied-eval` and `no-new-func`
			// https://typescript-eslint.io/rules/no-implied-eval/
			'@typescript-eslint/no-implied-eval': 'error',

			// disallows creating new instances of String, Number, and Boolean
			// https://eslint.org/docs/rules/no-new-wrappers
			'no-new-wrappers': 'error',

			// Disallow \8 and \9 escape sequences in string literals
			// https://eslint.org/docs/rules/no-nonoctal-decimal-escape
			'no-nonoctal-decimal-escape': 'error',

			// disallow use of (old style) octal literals
			// https://eslint.org/docs/rules/no-octal
			'no-octal': 'error',

			// disallow use of octal escape sequences in string literals, such as
			// var foo = 'Copyright \251';
			// https://eslint.org/docs/rules/no-octal-escape
			'no-octal-escape': 'error',

			// disallow usage of __proto__ property
			// https://eslint.org/docs/rules/no-proto
			'no-proto': 'error',

			// disallow certain object properties
			// https://eslint.org/docs/rules/no-restricted-properties
			'no-restricted-properties': [
				'error',
				{
					object: 'arguments',
					property: 'callee',
					message: 'arguments.callee is deprecated',
				},
				{
					property: '__defineGetter__',
					message: 'Please use Object.defineProperty instead.',
				},
				{
					property: '__defineSetter__',
					message: 'Please use Object.defineProperty instead.',
				},
			],

			// disallow the use of `Math.pow` in favor of the `**` operator
			// https://eslint.org/docs/rules/prefer-exponentiation-operator
			'prefer-exponentiation-operator': 'error',

			// disallow use of `Object.assign` in favor of the spread operator
			// https://eslint.org/docs/rules/prefer-object-spread
			'prefer-object-spread': 'error',

			// disallow use of assignment in return statement
			// https://eslint.org/docs/rules/no-return-assign
			'no-return-assign': ['error', 'always'],

			// disallow redundant `return await`
			// https://eslint.org/docs/rules/no-return-await
			// https://typescript-eslint.io/rules/return-await/
			'no-return-await': 'off',
			'@typescript-eslint/return-await': ['error', 'in-try-catch'],

			// disallow use of `javascript:` urls.
			// https://eslint.org/docs/rules/no-script-url
			'no-script-url': 'error',

			// disallow self assignment
			// https://eslint.org/docs/rules/no-self-assign
			'no-self-assign': [
				'error',
				{
					props: true,
				},
			],

			// disallow comparisons where both sides are exactly the same
			// https://eslint.org/docs/rules/no-self-compare
			'no-self-compare': 'error',

			// disallow use of comma operator
			// https://eslint.org/docs/rules/no-sequences
			'no-sequences': 'error',

			// disallow usage of expressions in statement position
			// https://eslint.org/docs/rules/no-unused-expressions
			// https://typescript-eslint.io/rules/no-unused-expressions/
			'no-unused-expressions': 'off',
			'@typescript-eslint/no-unused-expressions': [
				'error',
				{
					allowShortCircuit: false,
					allowTernary: false,
					allowTaggedTemplates: false,
				},
			],

			// disallow unused labels
			// https://eslint.org/docs/rules/no-unused-labels
			'no-unused-labels': 'error',

			// Disallow unnecessary catch clauses
			// https://eslint.org/docs/rules/no-useless-catch
			'no-useless-catch': 'error',

			// disallow useless string concatenation
			// https://eslint.org/docs/rules/no-useless-concat
			'no-useless-concat': 'error',

			// disallow unnecessary string escaping
			// https://eslint.org/docs/rules/no-useless-escape
			'no-useless-escape': 'error',

			// disallow redundant return; keywords
			// https://eslint.org/docs/rules/no-useless-return
			'no-useless-return': 'error',

			// disallow use of void operator
			// https://eslint.org/docs/rules/no-void
			'no-void': 'error',

			// disallow use of the with statement
			// https://eslint.org/docs/rules/no-with
			'no-with': 'error',

			// disallow array constructors
			// https://eslint.org/docs/latest/rules/no-array-constructor
			// https://typescript-eslint.io/rules/no-array-constructor
			'no-array-constructor': 'off',
			'@typescript-eslint/no-array-constructor': 'error',

			// disallow use of bitwise operators
			// https://eslint.org/docs/rules/no-bitwise
			'no-bitwise': 'error',

			// disallow dangling underscores in identifiers
			// https://eslint.org/docs/rules/no-underscore-dangle
			'no-underscore-dangle': ['error', { enforceInMethodNames: true }],

			// disallow use of chained assignment expressions
			// https://eslint.org/docs/rules/no-multi-assign
			'no-multi-assign': ['error'],

			// disallow use of Object constructors
			// https://eslint.org/docs/rules/no-object-constructor
			'no-object-constructor': 'error',

			// disallow ternary operators when simpler alternatives exist
			// https://eslint.org/docs/rules/no-unneeded-ternary
			'no-unneeded-ternary': ['error', { defaultAssignment: false }],

			// require or disallow the Unicode Byte Order Mark
			// https://eslint.org/docs/rules/unicode-bom
			'unicode-bom': ['error', 'never'],

			// require using Error objects as Promise rejection reasons
			// https://eslint.org/docs/rules/prefer-promise-reject-errors
			'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],

			// https://eslint.org/docs/rules/prefer-regex-literals
			'prefer-regex-literals': [
				'error',
				{
					disallowRedundantWrapping: true,
				},
			],

			// enforces no braces where they can be omitted
			// https://eslint.org/docs/rules/arrow-body-style
			'arrow-body-style': [
				'error',
				'as-needed',
				{
					requireReturnForObjectLiteral: false,
				},
			],

			// disallow useless computed property keys
			// https://eslint.org/docs/rules/no-useless-computed-key
			'no-useless-computed-key': 'error',

			// disallow unnecessary constructor
			// https://eslint.org/docs/rules/no-useless-constructor
			// https://typescript-eslint.io/rules/no-useless-constructor/
			'no-useless-constructor': 'off',
			'@typescript-eslint/no-useless-constructor': 'error',

			// disallow renaming import, export, and destructured assignments to the same name
			// https://eslint.org/docs/rules/no-useless-rename
			'no-useless-rename': [
				'error',
				{
					ignoreDestructuring: false,
					ignoreImport: false,
					ignoreExport: false,
				},
			],

			// require method and property shorthand syntax for object literals
			// https://eslint.org/docs/rules/object-shorthand
			'object-shorthand': [
				'error',
				'always',
				{
					ignoreConstructors: false,
					avoidQuotes: true,
				},
			],

			// suggest using arrow functions as callbacks
			// https://eslint.org/docs/rules/prefer-arrow-callback
			'prefer-arrow-callback': [
				'error',
				{
					allowNamedFunctions: false,
					allowUnboundThis: true,
				},
			],

			// Prefer destructuring from arrays and objects
			// https://eslint.org/docs/rules/prefer-destructuring
			'prefer-destructuring': [
				'error',
				{
					VariableDeclarator: {
						array: false,
						object: true,
					},
					AssignmentExpression: {
						array: true,
						object: false,
					},
				},
				{
					enforceForRenamedProperties: false,
				},
			],

			// disallow parseInt() in favor of binary, octal, and hexadecimal literals
			// https://eslint.org/docs/rules/prefer-numeric-literals
			'prefer-numeric-literals': 'error',

			// use rest parameters instead of arguments
			// https://eslint.org/docs/rules/prefer-rest-params
			'prefer-rest-params': 'error',

			// suggest using the spread syntax instead of .apply()
			// https://eslint.org/docs/rules/prefer-spread
			'prefer-spread': 'error',

			// suggest using template literals instead of string concatenation
			// https://eslint.org/docs/rules/prefer-template
			'prefer-template': 'error',

			// require a Symbol description
			// https://eslint.org/docs/rules/symbol-description
			'symbol-description': 'error',

			// require use of the second argument for parseInt()
			// https://eslint.org/docs/rules/radix
			radix: 'error',

			// requires to declare all vars on top of their containing scope
			// https://eslint.org/docs/rules/vars-on-top
			'vars-on-top': 'error',

			// require or disallow Yoda conditions
			// https://eslint.org/docs/rules/yoda
			yoda: 'error',
		},
	},
]

export default config
