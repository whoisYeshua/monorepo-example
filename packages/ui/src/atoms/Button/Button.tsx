import { Button as ChakraButton } from '@chakra-ui/react'

export interface ButtonProps {
	children?: React.ReactNode
	disabled?: boolean
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ disabled, onClick: handleClick, children }: ButtonProps) => (
	<ChakraButton
		colorPalette="green"
		disabled={disabled}
		size="md"
		variant="subtle"
		onClick={handleClick}
	>
		{children}
	</ChakraButton>
)
