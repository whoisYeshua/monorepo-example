// @ts-check
const path = require('node:path')
const { mergeDeepLeft } = require('ramda')

/**
 * Возвращает абсолютный путь до файла относительно папки пакета `jest-config`
 * @param {string} filePath Относительный путь к файлу от папки пакета `jest-config`
 * @returns {string}
 */
const fromJestConfigPackageRoot = (filePath) => path.join(__dirname, filePath)

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
						tsx: true,
					},
					target: 'es2022',
					transform: {
						react: {
							runtime: 'automatic',
						},
					},
				},
			},
		],
	},
	setupFilesAfterEnv: [fromJestConfigPackageRoot('./setupTests.ts')],
	resetMocks: true,
}

/**
 * Мерж пакетного Jest-конфига с базовым (в Jest нет встроенного механизма наследования конфигов)
 * @param {import('jest').Config} packageConfig Jest-конфиг пакета
 */
const mergeWithBase = (packageConfig) => mergeDeepLeft(packageConfig, sharedConfig)

module.exports = { sharedConfig, mergeWithBase }
