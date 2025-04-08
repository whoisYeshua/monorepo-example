import { UiProvider } from '../src/UiProvider'

import type { Preview } from '@storybook/react'

const preview: Preview = {
	decorators: [
		(Story) => (
			<UiProvider>
				<Story />
			</UiProvider>
		),
	],
	parameters: {
		// treat actions and mock all props which starts with "on" https://storybook.js.org/docs/essentials/actions#automatically-matching-args
		actions: { argTypesRegex: '^on.*' },
	},
}

export default preview
