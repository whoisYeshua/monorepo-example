import { Flex, Title } from '@mantine/core'

export const Topbar = () => (
	<Flex
		align="center"
		bg="#fffffff2"
		h={80}
		justify="center"
		sx={{ backdropFilter: 'blur(8px)', borderBottom: '1px solid lightgray' }}
	>
		<Title order={1}>This is h1 title</Title>
	</Flex>
)
