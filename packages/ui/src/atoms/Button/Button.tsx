import { Button as MButton } from '@mantine/core'

export interface ButtonProps {
	children?: React.ReactNode
	disabled?: boolean
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ disabled, onClick: handleClick, children }: ButtonProps) => (
	<MButton
		color="indigo"
		disabled={disabled}
		radius="md"
		size="md"
		variant="outline"
		onClick={handleClick}
	>
		{children}
	</MButton>
)
