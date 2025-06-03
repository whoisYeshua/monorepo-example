import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(ts|tsx)'],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	core: { disableTelemetry: true },
}
export default config
