import { useState, memo } from 'react'
import { Button, BulletList, Center, Flex, Heading } from '@monorepo-example/ui'

import { NumberInput } from '$components'

export const First = memo(() => {
	const [count, setCount] = useState(1)

	const handleClick = () => {
		setCount((prev) => ++prev)
	}

	const list = [
		'Andy',
		'Bobby',
		'Ash',
		'Braun',
		'Ciri',
		'Yanix',
		'Zod',
		'Geralt',
		'Grimm',
		'Skrillx',
		'Marsh',
	]

	return (
		<Center as="main" py="16px">
			<Flex align="center" direction="column" gap="16px" justify="center">
				<Heading>Main app</Heading>
				<Button onClick={handleClick}>Count: {count}</Button>
				<NumberInput />
				<div>
					<BulletList list={list} />
				</div>
			</Flex>
		</Center>
	)
})

First.displayName = 'First'
