import { useState } from 'react'
import { BulletList, Button, Flex, Heading, UiProvider } from '@monorepo-example/ui'

const App = () => {
	const [count, setCount] = useState(0)

	const handleClick = () => {
		setCount((prev) => ++prev)
	}

	const list = ['Red', 'Orange', 'Green', 'Blue', 'Black', 'Yellow']

	return (
		<UiProvider>
			<Flex align="center" direction="column" gap="16px" justify="center">
				<Heading>Widget app2</Heading>
				<Button onClick={handleClick}>Count: {count}</Button>
				<div>
					<BulletList list={list} />
				</div>
			</Flex>
		</UiProvider>
	)
}

export default App
