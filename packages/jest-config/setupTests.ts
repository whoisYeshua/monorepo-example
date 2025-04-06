import { randomBytes } from 'node:crypto'

import '@testing-library/jest-dom'
;(globalThis as any).crypto = {
	getRandomValues: (arr: unknown[]) => randomBytes(arr.length),
}
