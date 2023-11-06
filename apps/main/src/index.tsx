import React from 'react'
import ReactDOM from 'react-dom'
import { isDev } from '@monorepo-example/helpers'

import App from './App'

if (isDev() && import.meta.env.VITE_MOCK === 'mock') {
	const { worker, onUnhandledRequest } = await import('./mocks/browser')
	worker.start({ onUnhandledRequest })
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.querySelector('#root') as HTMLElement
)
