import { PointerEventsCheckLevel } from '@testing-library/user-event'

import { rtlRender } from '../../testUtil'

import { Button } from './Button'

describe('Button', () => {
	test('renders button wtesth correct text', () => {
		const { getByRole } = rtlRender(<Button>Click me</Button>)

		const button = getByRole('button')
		expect(button).toHaveTextContent('Click me')
	})

	test('calls onClick handler when clicked', async () => {
		const handleClick = jest.fn()
		const { getByRole, user } = rtlRender(<Button onClick={handleClick}>Click me</Button>)

		await user.click(getByRole('button'))

		expect(handleClick).toHaveBeenCalledTimes(1)
	})

	test('does not call onClick when disabled', async () => {
		const handleClick = jest.fn()
		const { getByRole, user } = rtlRender(
			<Button disabled onClick={handleClick}>
				Click me
			</Button>,
			undefined,
			{
				pointerEventsCheck: PointerEventsCheckLevel.Never,
			}
		)

		const button = getByRole('button')
		expect(button).toBeDisabled()

		await user.click(button)

		expect(handleClick).not.toHaveBeenCalled()
	})
})
