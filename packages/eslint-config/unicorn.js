// @ts-check
import unicornPlugin from 'eslint-plugin-unicorn'

/** @type {import('eslint').Linter.Config[]} */
const config = [
	unicornPlugin.configs.recommended,
	{
		name: 'unicorn-monorepo-example',
		rules: {
			// Enforce specific import styles per module (уже полно правил по импортам, еще и слегка бьет по перфу)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/import-style.md
			'unicorn/import-style': 'off',

			// Enforce a camelCase and PascalCase styles for filenames
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
			'unicorn/filename-case': [
				'warn',
				{ cases: { camelCase: true, pascalCase: true }, ignore: ['vite-env.d.ts'] },
			],
			// Disallow new Array() with one argument (в случаях создания массива фиксированной длины предлагает визуально тяжелый синтаксис, поэтому вырубаем)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-new-array.md
			'unicorn/no-new-array': 'off',

			// Disallow the use of the null literal (субъективное правило автора пресета, поэтому вырубаем)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-null.md
			'unicorn/no-null': 'off',

			// Prefer JavaScript modules (ESM) over CommonJS (dev среда у нас на CommonJS, поэтому вырубаем)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md
			'unicorn/prefer-module': 'off',

			// Prefer the spread operator over Array.from(…), Array#concat(…), Array#{slice,toSpliced}() and String#split('') (в некоторых кейсах, вроде псевдомассивов без итератора, данное правило даст сбой, так что пока живем без него)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-spread.md
			'unicorn/prefer-spread': 'off',

			// Prevent abbreviations (создает лишний шум, а написать непонятную переменную можно и с этим правилом. Будем отлавливать на уровне PR, поэтому вырубаем)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
			'unicorn/prevent-abbreviations': 'off',

			// Disallow Array#reduce() and Array#reduceRight() (запрещает использовать reduce)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-array-reduce.md
			'unicorn/no-array-reduce': 'off',

			// Prefer switch over multiple else-if (в реально больших случаях можно юзать switch или написать какую-то map соответсвий)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/blob/main/docs/rules/prefer-switch.md
			'unicorn/prefer-switch': ['error', { minimumCases: 5 }],

			// Enforce the use of built-in methods instead of unnecessary polyfills (не используем полифилы на проекте, лишняя проверка)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-polyfills.md
			'unicorn/no-unnecessary-polyfills': 'off',

			// Makes possible to pass arguments to TODO, FIXME and XXX comments to trigger ESLint to report (не используем, а правило бьёт по перфу)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
			'unicorn/expiring-todo-comments': 'off',

			// Improve regexes by making them shorter, consistent, and safer. (было включено на проекте с самого старта, но потом авторы unicorn его убрали из recomended, выглядит вроде логично, так что оставляем, но возможна замена на https://github.com/ota-meshi/eslint-plugin-regexp)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-regex.md
			'unicorn/better-regex': 'error',
		},
	},
]

export default config
