import React from 'react'
import { UiProvider } from '../src/UiProvider'

const preview = {
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
