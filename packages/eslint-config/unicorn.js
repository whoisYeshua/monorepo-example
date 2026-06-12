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

			// Prefer better DOM traversal APIs (часть suggested-правок не является механической миграцией: например, замена element.children[2] на element.querySelector('selector') требует знания DOM-структуры и выбора корректного селектора)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/better-dom-traversing.md
			'unicorn/better-dom-traversing': 'off',

			// Enforce consistent spelling of compound words in identifiers (дефолтные словари naming/spelling-правил плохо работают с доменными терминами проекта и могут требовать некорректных переименований; при замере rule timing правило заняло 67.607ms)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-compound-words.md
			'unicorn/consistent-compound-words': 'off',

			// Enforce consistent JSON file reads before JSON.parse() (для TS-кода ошибка парсинга Buffer вместо строки уже должна подсвечиваться typechecker'ом, а обучающая польза правила недостаточна для глобального включения; TODO: consider enabling in 4.0.0)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/consistent-json-file-read.md
			'unicorn/consistent-json-file-read': 'off',

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

			// Disallow unnecessary Blob to File conversion (может затронуть комплексную работу с файлами, где File может быть выбран намеренно, а сам сценарий правила узкий и необязательный для общего конфига; TODO: consider enabling in 4.0.0)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-blob-to-file.md
			'unicorn/no-blob-to-file': 'off',

			// Prefer drawing canvases directly instead of converting them to images (может затронуть комплексную работу с изображениями, где промежуточный image/data URL может быть частью намеренного pipeline; TODO: consider enabling in 4.0.0)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-canvas-to-image.md
			'unicorn/no-canvas-to-image': 'off',

			// Disallow confusing uses of Array#{splice,toSpliced}() (часть предлагаемых исправлений делает код сложнее и требует ручной оценки поведения индексов, мутации и возвращаемого значения; TODO: consider enabling in 4.0.0)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-confusing-array-splice.md
			'unicorn/no-confusing-array-splice': 'off',

			// Enforce the use of built-in methods instead of unnecessary polyfills (не используем полифилы на проекте, лишняя проверка)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unnecessary-polyfills.md
			'unicorn/no-unnecessary-polyfills': 'off',

			// Makes possible to pass arguments to TODO, FIXME and XXX comments to trigger ESLint to report (не используем, а правило бьёт по перфу)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/expiring-todo-comments.md
			'unicorn/expiring-todo-comments': 'off',

			// Prevent usage of variables from outside the scope of isolated functions e.g. functions passed to makeSynchronous() run in worker/subprocess and cannot access outer scope. (не используем, так как очень специфичное, предпологается, что будет включаться на проекте точечно – по необходимости)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/isolated-functions.md
			'unicorn/isolated-functions': 'off',

			// Prefer the simpler condition first in logical expressions (порядок условий часто намеренный — guard сначала, основная проверка потом. Автофикс может изменить поведение из-за short-circuit evaluation, поэтому вырубаем)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-simple-condition-first.md
			'unicorn/prefer-simple-condition-first': 'off',

			// Disallow unused return values from array methods (может сильно усложнить обновление на некоторых проектах, а часть поведения уже покрыта другими правилами; TODO: consider enabling in 4.0.0)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/no-unused-array-method-return.md
			'unicorn/no-unused-array-method-return': 'off',

			// Prefer HTTPS over HTTP (слишком редкий кейс для отдельного глобального правила; URL с протоколом лучше проверять по контексту, когда они реально добавляются или меняются)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-https.md
			'unicorn/prefer-https': 'off',

			// Prefer String#split() with a limit (это микрооптимизация, которая часто ухудшает читаемость: split('/')[1] проще считывается, чем split('/', 2)[1], а практический выигрыш обычно слишком мал)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-split-limit.md
			'unicorn/prefer-split-limit': 'off',

			// Prefer String#matchAll() over RegExp#exec() loops (RegExp#exec() loop иногда используется намеренно, когда важны контроль состояния regexp, early exit или пошаговая обработка)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-string-match-all.md
			'unicorn/prefer-string-match-all': 'off',

			// Prefer .includes() over repeated equality comparisons (оригинальное значение в 3 слишком низкое для изменения синтаксиса)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-includes-over-repeated-comparisons.md
			'unicorn/prefer-includes-over-repeated-comparisons': ['error', { minimumComparisons: 5 }],

			// Prefer switch over multiple else-if (в реально больших случаях можно юзать switch или написать какую-то map соответсвий)
			// https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-switch.md
			'unicorn/prefer-switch': ['error', { minimumCases: 5 }],
		},
	},
]

export default config
