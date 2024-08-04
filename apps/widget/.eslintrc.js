module.exports = {
	root: true,
	extends: ['@monorepo-example'],
	settings: {
		'import/resolver': {
			typescript: {
				project: `${__dirname}/tsconfig.json`,
			},
		},
	},
}
