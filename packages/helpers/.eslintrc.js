module.exports = {
	root: true,
	env: {
		jest: true,
	},
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
	},
	extends: ['@monorepo-example'],
	settings: {
		'import/resolver': {
			node: true,
			typescript: {
				project: 'apps/widget/tsconfig.json',
			},
		},
	},
}
