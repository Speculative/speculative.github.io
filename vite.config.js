import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			$styles: path.resolve('src/lib/styles'),
			$components: path.resolve('src/lib/components'),
			$content: path.resolve('src/content')
		}
	},
	server: {
		cors: {
			origin: '*'
		}
	}
};

export default config;
