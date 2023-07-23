import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import App from './App'

describe('App', () => {
	test('renders the title', () => {
		render(<App />)
		const titleElement = screen.getByText('Main app')
		expect(titleElement).toBeInTheDocument()
	})

	test('increments count when the button is clicked', async () => {
		render(<App />)
		const buttonElement = screen.getByText('Count: 1')

		// Use userEvent to click the button
		await userEvent.click(buttonElement)

		expect(screen.getByText('Count: 2')).toBeInTheDocument()
	})
})
