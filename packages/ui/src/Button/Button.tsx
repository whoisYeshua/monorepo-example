import { Button as MButton } from '@mantine/core'

export interface ButtonProps {
	children?: React.ReactNode
	disabled?: boolean
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: ButtonProps) => {
	return (
		<MButton
			variant="outline"
			color="indigo"
			radius="md"
			size="md"
			disabled={props.disabled}
			onClick={props.onClick}
		>
			{props.children}
		</MButton>
	)
}
