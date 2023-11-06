import { BulletList as CommonBulletList } from './BulletList'

import type { BulletListProps } from './BulletList'
import type { Story } from '@ladle/react'

export const BulletList: Story<BulletListProps> = CommonBulletList

BulletList.args = {
	list: ['first', 'second', 'third'],
}

export default {
	title: 'Atoms',
}
