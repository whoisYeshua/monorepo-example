module.exports = {
	root: true,
	env: {
		jest: true,
	},
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: './tsconfig.json',
	},
	extends: ['@des-front'],
}
