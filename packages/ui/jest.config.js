// @ts-check
import { mergeWithBase } from '@monorepo-example/jest-config'

import packageJson from './package.json' with { type: 'json' }

/** @type {import('jest').Config} */
const packageConfig = {
	displayName: packageJson.name,
}

const config = mergeWithBase(packageConfig)

export default config
