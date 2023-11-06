import { MantineProvider } from '@mantine/core'

import { Topbar } from '$components'
import { First } from '$pages'

const App = () => (
	<MantineProvider withGlobalStyles withNormalizeCSS>
		<Topbar />
		<First />
	</MantineProvider>
)

export default App
