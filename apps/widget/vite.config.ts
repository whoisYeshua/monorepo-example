import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	build: {
		modulePreload: { polyfill: false },
		chunkSizeWarningLimit: 700,
		rollupOptions: {
			output: { manualChunks: (id) => (id.includes('node_modules') ? 'vendor' : undefined) },
		},
	},
})
