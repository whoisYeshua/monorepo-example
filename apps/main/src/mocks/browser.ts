import { setupWorker } from 'msw'

import { handlers } from './handlers'

import type { SharedOptions } from 'msw'

export const worker = setupWorker(...handlers)

export const onUnhandledRequest: SharedOptions['onUnhandledRequest'] = (req, print) => {
	const excludeExtensions = ['.woff2', '.css', '.tsx', '.ts']
	const isExclude = excludeExtensions.some((extension) => req.url.pathname.endsWith(extension))

	if (isExclude) return

	print.warning()
}
