import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
	const config = {
		plugins: [react()],
		base: command === 'serve' ? '/' : '/3d-apple-iphone/',
		assetsInclude: ['**/*.glb'],
	};

	return config;
});
