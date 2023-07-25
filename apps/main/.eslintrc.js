module.exports = {
	root: true,
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
	},
	extends: ['@monorepo-example'],
	settings: {
		'import/resolver': {
			node: true,
			typescript: {
				project: 'apps/main/tsconfig.json',
			},
		},
	},
}
