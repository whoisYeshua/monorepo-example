import { act } from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { setupServer } from 'msw/node'

import { mockPosts } from '$mocks/handlers/mockPosts'

import App from './App'

// Setup MSW server
const server = setupServer(...mockPosts)

describe('App', () => {
	// Setup and teardown MSW
	beforeAll(() => server.listen())
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())

	test('renders the title', async () => {
		await act(async () => render(<App />))
		const titleElement = screen.getByText('Main app')
		expect(titleElement).toBeInTheDocument()
	})

	test('increments count when the button is clicked', async () => {
		await act(async () => render(<App />))
		const buttonElement = screen.getByText('Count: 1')

		// Use userEvent to click the button
		await userEvent.click(buttonElement)

		expect(screen.getByText('Count: 2')).toBeInTheDocument()
	})
})
