/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

import '@monorepo-example/tsconfig/ts-reset'
import '@monorepo-example/tsconfig/global'

declare namespace NodeJS {
	interface ProcessEnv {
		NODE_ENV: 'development' | 'production'
	}
}
