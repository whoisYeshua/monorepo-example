import { useState } from 'react'

interface NumberInputProps {
	value?: number
	onChange?: (value: number) => void
}

export const NumberInput = (props: NumberInputProps) => {
	const [value, setValue] = useState(props.value ?? 0)

	const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
		const parsedValue = Number(e.target.value)
		setValue(parsedValue)
		props.onChange?.(parsedValue)
	}

	return <input type="number" value={value} onChange={handleChange} />
}
