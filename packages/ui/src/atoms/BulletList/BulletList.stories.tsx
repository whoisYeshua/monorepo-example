import { BulletList as CommonBulletList } from './BulletList'

import type { Meta, StoryObj } from '@storybook/react-vite'

type Story = StoryObj<typeof CommonBulletList>

export const BulletList: Story = {
	args: {
		list: ['first', 'second', 'third', 'fourth'],
	},
}

export const BulletListInContainer: Story = {
	render: () => (
		<div>
			<CommonBulletList list={['first', 'last']} />
		</div>
	),
}

export default {
	component: CommonBulletList,
} satisfies Meta<typeof CommonBulletList>
