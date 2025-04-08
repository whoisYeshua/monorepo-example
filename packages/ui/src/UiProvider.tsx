/* eslint-disable import/no-extraneous-dependencies -- listed inside @emotion/react deps */
import { memo, type ReactNode } from 'react'
import {
	ChakraProvider,
	createSystem,
	defaultConfig,
	mergeConfigs,
	defineConfig,
} from '@chakra-ui/react'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

const DEFAULT_KEY = 'monorepo-example'

interface UiProviderProps {
	/** @default  */
	prefix?: string
	children: ReactNode | ReactNode[]
}

const cache = createCache({ key: DEFAULT_KEY, stylisPlugins: [] })
const config = defineConfig({ cssVarsPrefix: DEFAULT_KEY })
const resultConfig = mergeConfigs(defaultConfig, config)
const system = createSystem(resultConfig)

export const UiProvider = memo(({ children }: UiProviderProps) => (
	<CacheProvider value={cache}>
		<ChakraProvider value={system}>{children}</ChakraProvider>
	</CacheProvider>
))

UiProvider.displayName = 'UiProvider'
