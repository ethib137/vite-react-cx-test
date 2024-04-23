import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: 'build/vite',
		rollupOptions: {
			external: [/@clayui\/*/, 'react', 'react-dom'],
			output: {
				assetFileNames: 'assets/[name][extname]',
				chunkFileNames: '[name]-[hash].js',
				entryFileNames: '[name]-[hash].js',
			},
		},
		target: 'esnext',
	},
	plugins: [react({jsxRuntime: 'classic'})],
})
