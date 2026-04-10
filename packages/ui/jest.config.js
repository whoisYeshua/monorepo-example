// @ts-check
import { defineConfig, mergeConfig, sharedConfig } from '@monorepo-example/jest-config'

import packageJson from './package.json' with { type: 'json' }

const packageConfig = defineConfig({
	displayName: packageJson.name,
})

export default mergeConfig(sharedConfig, packageConfig)
