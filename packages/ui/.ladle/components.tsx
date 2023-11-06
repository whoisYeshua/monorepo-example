import { MantineProvider } from '@mantine/core'

import type { GlobalProvider } from '@ladle/react'

export const Provider: GlobalProvider = ({ children }) => (
	<MantineProvider withGlobalStyles withNormalizeCSS>
		{children}
	</MantineProvider>
)
