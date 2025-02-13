import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const targetApi =
	process.env.VITE_API === 'local'
		? 'http://localhost:8081'
		: 'https://jsonplaceholder.typicode.com/'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	server: {
		proxy: {
			'/back': targetApi,
		},
	},
})
