import { Flex, Heading } from '@monorepo-example/ui'

export const Topbar = () => (
	<Flex
		align="center"
		as="header"
		backdropFilter="blur(8px)"
		bg="#fffffff2"
		borderBottom="1px solid lightgray"
		h="80px"
		justify="center"
	>
		<Heading size="2xl">This is title</Heading>
	</Flex>
)
