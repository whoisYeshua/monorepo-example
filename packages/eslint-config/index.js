module.exports = {
	env: {
		browser: true,
		es2022: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': 'warn',
	},
	ignorePatterns: ['node_modules', 'dist'],
}
