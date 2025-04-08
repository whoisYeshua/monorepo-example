// @ts-check
// This file contains import-related rules (from airbnb config)

/** @type {import('eslint').Linter.Config[]} */
const config = [
	{
		name: 'imports-monorepo-example',
		settings: {
			'import/ignore': ['node_modules', '\\.(css|hbs|svg|json)$'],
		},
		rules: {
			// Helpful warnings:

			// ensure imports point to files/modules that can be resolved
			// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
			'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],

			// disallow invalid exports, e.g. multiple defaults
			// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/export.md
			'import/export': 'error',

			// disallow use of jsdoc-marked-deprecated imports
			// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-deprecated.md
			'import/no-deprecated': 'error',

			// Forbid the use of extraneous packages
			// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
			// paths are treated both as absolute paths, and relative to process.cwd()
			'import/no-extraneous-dependencies': [
				'error',
				{
					devDependencies: true,
				},
			],

			// Forbid mutable exports
			// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-mutable-exports.md
			'import/no-mutable-exports': 'error',

			// Module systems:

			// disallow AMD require/define
			// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-amd.md
			'import/no-amd': 'error',

			// Style guide:

			// disallow non-import statements appearing before import statements
			// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md
			'import/first': 'warn',

			// disallow duplicate imports
			// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-duplicates.md
			'import/no-duplicates': 'warn',

			// Ensure consistent use of file extension within the import path
			// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
			'import/extensions': [
				'error',
				'ignorePackages',
				{
					js: 'never',
					mjs: 'never',
					jsx: 'never',
					ts: 'never',
					tsx: 'never',
				},
			],

			// ensure absolute imports are above relative imports and that unassigned imports are ignored
			// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
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

			// Require a newline after the last import/require in a group
			// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/newline-after-import.md
			'import/newline-after-import': ['warn', { considerComments: true }],

			// Forbid import of modules using absolute paths
			// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-absolute-path.md
			'import/no-absolute-path': 'error',

			// Forbid require() calls with expressions
			// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
			'import/no-dynamic-require': 'error',

			// Forbid Webpack loader syntax in imports
			// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-webpack-loader-syntax.md
			'import/no-webpack-loader-syntax': 'error',

			// Prevent importing the default as if it were named
			// https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-named-default.md
			'import/no-named-default': 'error',

			// Forbid a module from importing itself
			// https://github.com/benmosher/eslint-plugin-import/blob/44a038c06487964394b1e15b64f3bd34e5d40cde/docs/rules/no-self-import.md
			'import/no-self-import': 'error',

			// Forbid cyclical dependencies between modules
			// https://github.com/benmosher/eslint-plugin-import/blob/d81f48a2506182738409805f5272eff4d77c9348/docs/rules/no-cycle.md
			'import/no-cycle': ['error', { maxDepth: '∞' }],

			// Ensures that there are no useless path segments
			// https://github.com/benmosher/eslint-plugin-import/blob/ebafcbf59ec9f653b2ac2a0156ca3bcba0a7cf57/docs/rules/no-useless-path-segments.md
			'import/no-useless-path-segments': 'warn',

			// Reports the use of import declarations with CommonJS exports in any module except for the main module.
			// https://github.com/benmosher/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-import-module-exports.md
			'import/no-import-module-exports': [
				'error',
				{
					exceptions: [],
				},
			],

			// Use this rule to prevent importing packages through relative paths.
			// https://github.com/benmosher/eslint-plugin-import/blob/1012eb951767279ce3b540a4ec4f29236104bb5b/docs/rules/no-relative-packages.md
			'import/no-relative-packages': 'error',

			// The import/namespace rule ensures that all names (`n.x()`) in a namespace (`import * as ns from 'package'`) import are valid and exist when dereferenced. Very heavy rule.
			// https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/namespace.md
			'import/namespace': 'off',

			// Disallow specified names in exports
			// https://eslint.org/docs/rules/no-restricted-exports
			'no-restricted-exports': [
				'error',
				{
					restrictedNamedExports: [
						'default', // use `export default` to provide a default export
						'then', // this will cause tons of confusion when your module is dynamically `import()`ed, and will break in most node ESM versions
					],
				},
			],
		},
	},
]

export default config
