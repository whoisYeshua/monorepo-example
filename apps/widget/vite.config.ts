import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

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
})
