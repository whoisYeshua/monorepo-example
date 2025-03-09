import React from 'react'
import { createRoot } from 'react-dom/client'
import { isDev } from '@monorepo-example/helpers'

import App from './App'

if (isDev() && import.meta.env.VITE_MOCK === 'mock') {
	const { worker, onUnhandledRequest } = await import('./mocks/browser')
	await worker.start({ onUnhandledRequest })
}

createRoot(document.querySelector('#root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
