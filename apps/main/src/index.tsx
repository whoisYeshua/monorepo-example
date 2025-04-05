import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { isDev } from '@monorepo-example/helpers'

import App from './App'

if (isDev() && import.meta.env.VITE_API === 'mock') {
	const { worker, onUnhandledRequest } = await import('./mocks/browser')
	await worker.start({ onUnhandledRequest })
}

createRoot(document.querySelector('#root') as HTMLElement).render(
	<StrictMode>
		<App />
	</StrictMode>
)
