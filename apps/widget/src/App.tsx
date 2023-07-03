import { useState } from 'react'
import { Center, Flex, Title } from '@mantine/core'
import { BulletList, Button } from '@des-front/ui'

const App = () => {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount(prev => ++prev)
	}

	const list = ['Red', 'Orange', 'Green', 'Blue', 'Black', 'Yellow']

	return (
		<Center inline={false}>
			<Flex gap="md" justify="center" align="center" direction="column">
				<Title order={1}>Widget app</Title>
				<Button onClick={handleClick}>Count: {count}</Button>
				<div>
					<BulletList list={list} />
				</div>
			</Flex>
		</Center>
	)
}

export default App
