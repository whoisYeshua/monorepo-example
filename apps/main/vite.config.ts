import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const targetApi =
	process.env.VITE_API === 'local'
		? 'http://localhost:8081'
		: 'https://jsonplaceholder.typicode.com/'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: { tsconfigPaths: true },
	build: {
		modulePreload: { polyfill: false },
		chunkSizeWarningLimit: 700,
		rollupOptions: {
			output: { manualChunks: (id) => (id.includes('node_modules') ? 'vendor' : undefined) },
		},
	},
	server: {
		proxy: {
			'/api': {
				target: targetApi,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
})
