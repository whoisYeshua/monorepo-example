/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

import '@monorepo-example/tsconfig/ts-reset'

declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production'
	}
}
