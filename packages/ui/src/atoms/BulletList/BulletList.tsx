import { memo } from 'react'
import { List } from '@mantine/core'
import { groupList } from '@monorepo-example/helpers'

export interface BulletListProps {
	list: string[]
}

export const BulletList = memo(({ list }: BulletListProps) => {
	const groupedList = groupList(list)

	if (groupList.length === 0) return 'Empty List' as unknown as React.ReactElement

	return (
		<List listStyleType="disc">
			{Object.entries(groupedList).map(([label, labeledList]) => (
				<List.Item key={label}>
					<span>{label}</span>
					{labeledList ? (
						<List
							listStyleType="disc"
							styles={{ item: { '&::marker': { content: '"+ "' } } }}
							withPadding
						>
							{labeledList.map((item) => (
								<List.Item key={item}>{item}</List.Item>
							))}
						</List>
					) : (
						'No items'
					)}
				</List.Item>
			))}
		</List>
	)
})
BulletList.displayName = 'BulletList'
