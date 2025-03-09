import { UiProvider } from '@monorepo-example/ui'

import { Topbar } from '$components'
import { First } from '$pages'

const App = () => (
	<UiProvider>
		<Topbar />
		<First />
	</UiProvider>
)

export default App
