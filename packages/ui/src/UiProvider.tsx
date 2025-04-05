/* eslint-disable import/no-extraneous-dependencies -- listed inside @emotion/react deps */
import { memo, useMemo, type ReactNode } from 'react'
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

export const UiProvider = memo(({ children, prefix = DEFAULT_KEY }: UiProviderProps) => {
	const cache = useMemo(() => createCache({ key: prefix, stylisPlugins: [] }), [prefix])
	const config = useMemo(() => defineConfig({ cssVarsPrefix: prefix }), [prefix])
	const resultConfig = useMemo(() => mergeConfigs(defaultConfig, config), [config])
	const system = useMemo(() => createSystem(resultConfig), [resultConfig])

	return (
		<CacheProvider value={cache}>
			<ChakraProvider value={system}>{children}</ChakraProvider>
		</CacheProvider>
	)
})

UiProvider.displayName = 'UiProvider'
