import '@testing-library/jest-dom'
import { randomBytes } from 'node:crypto'
;(global as any).crypto = {
	getRandomValues: (arr: unknown[]) => randomBytes(arr.length),
}
