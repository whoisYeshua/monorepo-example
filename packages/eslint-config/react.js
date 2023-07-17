module.exports = {
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'plugin:jsx-a11y/recommended',
	],
	plugins: ['react-refresh'],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		// Validate that your components can safely be updated with fast refresh.
		// https://github.com/ArnaudBarre/eslint-plugin-react-refresh
		'react-refresh/only-export-components': 'warn',

		// Enforce consistent usage of destructuring assignment of props, state, and context
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
		'react/destructuring-assignment': ['error', 'always', { destructureInSignature: 'always' }],

		// Prevent missing displayName in a React component definition
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/display-name.md
		'react/display-name': 'error',

		// Enforce a specific function type for function components
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
		'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],

		// Ensure destructuring and symmetric naming of useState hook value and setter variables
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/c8833f301314dab3e79ef7ac4cf863e4d5fa0019/docs/rules/hook-use-state.md
		'react/hook-use-state': 'error',

		// Enforce boolean attributes notation in JSX
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
		'react/jsx-boolean-value': ['error', 'never'],

		// only .tsx files may have JSX
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
		'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

		// Enforce shorthand or standard form for React fragments
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/bc976b837abeab1dffd90ac6168b746a83fc83cc/docs/rules/jsx-fragments.md
		'react/jsx-fragments': ['error', 'syntax'],

		// Enforce event handler naming conventions in JSX
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
		'react/jsx-handler-names': ['error', { checkLocalVariables: true }],

		// Disallow unnecessary fragments
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-no-useless-fragment.md
		'react/jsx-no-useless-fragment': 'error',

		// Prevent usage of unknown DOM property
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
		'react/no-unknown-property': 'error',

		// Enforce props alphabetical sorting
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
		'react/jsx-sort-props': [
			'warn',
			{
				ignoreCase: true,
				callbacksLast: true,
				shorthandFirst: false,
				shorthandLast: true,
				noSortAlphabetically: false,
				reservedFirst: true,
			},
		],

		// Prevent extra closing tags for components without children
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
		'react/self-closing-comp': 'error',

		// Prevent void DOM elements from receiving children
		// https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/void-dom-elements-no-children.md
		'react/void-dom-elements-no-children': 'error',
	},
}
