import { memo } from 'react'
import { List } from '@chakra-ui/react'
import { groupList } from '@monorepo-example/helpers'

interface BulletListProps {
	list: string[]
}

export const BulletList = memo(({ list }: BulletListProps) => {
	const groupedList = groupList(list)

	if (groupList.length === 0) return 'Empty List'

	return (
		<List.Root listStyleType="disc">
			{Object.entries(groupedList).map(([label, labeledList]) => (
				<List.Item key={label}>
					<span>{label}</span>
					{labeledList ? (
						<List.Root listStyleType="disc" pl="1.5rem">
							{labeledList.map((item) => (
								<List.Item key={item} css={{ '&::marker': { content: '"+ "' } }}>
									{item}
								</List.Item>
							))}
						</List.Root>
					) : (
						'No items'
					)}
				</List.Item>
			))}
		</List.Root>
	)
})
BulletList.displayName = 'BulletList'
