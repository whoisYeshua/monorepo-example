import { useState, memo } from 'react'
import { Button, Center, Flex, Heading } from '@monorepo-example/ui'

import { getPosts } from '$api'
import { NumberInput } from '$components'

import { Posts } from './Posts'

export const Home = memo(() => {
	// eslint-disable-next-line react/hook-use-state -- not have a setter, used just for initial value
	const [postsPromise] = useState(() => getPosts())
	const [count, setCount] = useState(1)

	const handleClick = () => {
		setCount((prev) => ++prev)
	}

	return (
		<Center as="main" py="16px">
			<Flex align="center" direction="column" gap="16px" justify="center">
				<Heading>Main app</Heading>
				<Button onClick={handleClick}>Count: {count}</Button>
				<NumberInput />
				<Posts postsPromise={postsPromise} />
			</Flex>
		</Center>
	)
})

Home.displayName = 'Home'
