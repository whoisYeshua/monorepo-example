import { List } from '@mantine/core'
import { groupList } from '@des-front/helpers'

interface BulletListProps {
	list: string[]
}

export const BulletList = (props: BulletListProps) => {
	const groupedList = groupList(props.list)

	if (groupList.length === 0) return 'Empty List' as any as React.ReactElement

	return (
		<List listStyleType="disc">
			{Object.entries(groupedList).map(([label, labeledList]) => (
				<List.Item key={label}>
					<span>{label}</span>
					{labeledList ? (
						<List
							withPadding
							listStyleType="disc"
							styles={{ item: { '&::marker': { content: '"+ "' } } }}
						>
							{labeledList.map(item => (
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
}
