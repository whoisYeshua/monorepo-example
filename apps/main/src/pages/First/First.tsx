import { useState, memo } from 'react'
import { Center, Flex, Title } from '@mantine/core'
import { Button, BulletList } from '@monorepo-example/ui'

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
		<Center inline={false}>
			<Flex align="center" direction="column" gap="md" justify="center">
				<Title order={1}>Main app</Title>
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
