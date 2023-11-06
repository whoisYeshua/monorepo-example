import { useState } from 'react'

export interface NumberInputProps {
	value?: number
	onChange?: (value: number) => void
}

export const NumberInput = ({ value, onChange }: NumberInputProps) => {
	const [inputValue, setInputValue] = useState(value ?? 0)

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		const parsedValue = Number(e.target.value)
		setInputValue(parsedValue)
		onChange?.(parsedValue)
	}

	return <input type="number" value={inputValue} onChange={handleChange} />
}
