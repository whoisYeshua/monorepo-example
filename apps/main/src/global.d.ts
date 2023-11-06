/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

import '@monorepo-example/tsconfig/ts-reset'

declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production'
	}
}

declare module '*.bmp' {
	const src: string
	export default src
}

declare module '*.gif' {
	const src: string
	export default src
}

declare module '*.jpg' {
	const src: string
	export default src
}

declare module '*.jpeg' {
	const src: string
	export default src
}

declare module '*.png' {
	const src: string
	export default src
}

declare module '*.webp' {
	const src: string
	export default src
}

declare module '*.svg' {
	const src: string
	export default src
}
