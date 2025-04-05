import { UiProvider } from '@monorepo-example/ui'

import { Topbar } from '$components'
import { Home } from '$pages'

const App = () => (
	<UiProvider>
		<Topbar />
		<Home />
	</UiProvider>
)

export default App
