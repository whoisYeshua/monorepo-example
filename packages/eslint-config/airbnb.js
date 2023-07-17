module.exports = {
	// Override airbnb-base parserOptions for modern features support
	// https://github.com/airbnb/javascript/blob/fd77bbebb77362ddecfef7aba3bf6abf7bdd81f2/packages/eslint-config-airbnb-base/rules/es6.js
	parserOptions: {
		ecmaFeatures: {
			generators: true,
			objectLiteralDuplicateProperties: true,
		},
	},
	extends: ['airbnb-base', 'airbnb-typescript/base'],
	rules: {
		// Disallow use of variables before they are defined (eslint built-in rule уже отключено в airbnb-typescript/base. Зачастую будет мешать (например, при styled) в контексе react приложения, где все подобные переменные, функции уже проинициализированы при старте приложения)
		// https://typescript-eslint.io/rules/no-use-before-define
		'@typescript-eslint/no-use-before-define': 'off',

		// Forbid the use of extraneous packages (нам важны только обычные dependencies, которые не объявлены в пакетном package.json, devDependencies можно юзать, частый кейс - в конфигурационных файлах dev инструментов)
		// https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],

		// Require modules with a single export to use a default export (стараемся как можно меньше юзать default export, поэтому отключаем)
		// https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
		'import/prefer-default-export': 'off',

		// Disallow reassignment of function parameters (часто будет мешать и все кейсы в ignorePropertyModificationsFor не учесть)
		// rule: https://eslint.org/docs/rules/no-param-reassign.html
		'no-param-reassign': 'off',

		// Disallow use of unary operators, ++ and -- (лишнее органичение, которое можно держать в голове)
		// https://eslint.org/docs/rules/no-plusplus
		'no-plusplus': 'off',

		// Disallow certain syntax forms (мутные правила, которые отчасти уже устарели)
		// https://eslint.org/docs/rules/no-restricted-syntax
		'no-restricted-syntax': 'off',
	},
}
