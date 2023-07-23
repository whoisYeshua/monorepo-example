// @ts-check
const path = require('node:path')
const { mergeDeepLeft } = require('ramda')

/**
 * Возвращает абсолютный путь до файла относительно запрашивающей директории
 * @param {string} filePath Относительный путь к файлу от запрашивающей директории
 * @returns {string}
 */
const fromRoot = filePath => path.join(__dirname, filePath)

/** @type {import('jest').Config} */
const sharedConfig = {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': [
			'@swc/jest',
			{
				jsc: {
					parser: {
						syntax: 'typescript',
						jsx: true,
					},
					transform: {
						react: {
							runtime: 'automatic',
						},
					},
				},
			},
		],
	},
	moduleNameMapper: {
		'^\\$atoms/(.*)$': fromRoot('/../../packages/ui/src/atoms/$1'),
		'^\\$atoms$': fromRoot('/../../packages/ui/src/atoms'),
	},
	setupFilesAfterEnv: [fromRoot('setupTests.ts')],
	resetMocks: true,
}

/**
 * Мерж пакетного Jest-конфига с базовым (в Jest нет встроенного механизма наследования конфигов)
 * @param {import('jest').Config} packageConfig Jest-конфиг пакета
 */
const mergeWithBase = packageConfig => mergeDeepLeft(packageConfig, sharedConfig)

module.exports = { sharedConfig, fromRoot, mergeWithBase }
