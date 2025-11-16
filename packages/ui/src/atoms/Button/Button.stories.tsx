import { Button as CommonButton } from './Button'

import type { Meta, StoryObj } from '@storybook/react-vite'

type Story = StoryObj<typeof CommonButton>

export const Button: Story = {
	args: {
		children: 'Click me',
		disabled: false,
	},
}

export const DisabledButton: Story = {
	args: {
		children: 'Disabled Button',
		disabled: true,
	},
}

export const ButtonInContainer: Story = {
	render: () => (
		<div>
			<CommonButton>Click me</CommonButton>
		</div>
	),
}

export default {
	component: CommonButton,
} satisfies Meta<typeof CommonButton>
