module.exports = {
	root: true,
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
	},
	extends: ['@des-front'],
	settings: {
		'import/resolver': {
			node: true,
			typescript: {
				project: 'apps/widget/tsconfig.json',
			},
		},
	},
}
