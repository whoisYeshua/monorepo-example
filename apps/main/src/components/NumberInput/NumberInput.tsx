import { useState } from 'react'
import { NumberInput as ChakraNumberInput } from '@monorepo-example/ui'

interface NumberInputProps {
	value?: number | null
	onChange?: (value: number | null) => void
}

export const NumberInput = ({ value, onChange }: NumberInputProps) => {
	const [inputValue, setInputValue] = useState(value ?? null)

	const handleChange = ({ valueAsNumber }: { value: string; valueAsNumber: number }) => {
		const parsedValue = Number.isNaN(valueAsNumber) ? null : valueAsNumber
		setInputValue(parsedValue)
		onChange?.(parsedValue)
	}

	return (
		<ChakraNumberInput.Root value={inputValue} width="200px" onValueChange={handleChange}>
			<ChakraNumberInput.Input />
		</ChakraNumberInput.Root>
	)
}
