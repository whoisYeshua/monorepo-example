import { useState } from 'react'
import { Center, Flex, Title } from '@mantine/core'
import { BulletList, Button } from '@monorepo-example/ui'

const App = () => {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount(prev => ++prev)
	}

	const list = ['Red', 'Orange', 'Green', 'Blue', 'Black', 'Yellow']

	return (
		<Center inline={false}>
			<Flex align="center" direction="column" gap="md" justify="center">
				<Title order={1}>Widget app2</Title>
				<Button onClick={handleClick}>Count: {count}</Button>
				<div>
					<BulletList list={list} />
				</div>
			</Flex>
		</Center>
	)
}

export default App
