import { render } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'

import { UiProvider } from './UiProvider'

import type { RenderOptions } from '@testing-library/react'
import type { ReactNode } from 'react'

// eslint-disable-next-line react-refresh/only-export-components -- not supposed to work with the HMS because of the burden of the tests
const Provider = ({ children }: { children: ReactNode }) => <UiProvider>{children}</UiProvider>

export const rtlRender = (
	ui: ReactNode,
	options?: Omit<RenderOptions, 'queries'>,
	userEventConfig?: Parameters<typeof userEvent.setup>[0]
) => ({
	user: userEvent.setup(userEventConfig),
	...render(ui, { wrapper: Provider, ...options }),
})
