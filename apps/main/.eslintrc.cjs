module.exports = {
	root: true,
	extends: ['@monorepo-example'],
	parserOptions: { tsconfigRootDir: __dirname },
	settings: {
		'import/resolver': {
			typescript: { project: `${__dirname}/tsconfig.json` },
		},
	},
}
