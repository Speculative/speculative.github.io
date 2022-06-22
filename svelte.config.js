import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		preprocess({
			scss: {
				prependData: `@use 'src/lib/styles/vars';`
			}
		}),
		mdsvex({
			extensions: ['.md'],
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
		})
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build'
		}),
		trailingSlash: 'always',
		prerender: {
			default: true
		},
		vite: {
			resolve: {
				alias: {
					$styles: path.resolve('src/lib/styles'),
					$components: path.resolve('src/lib/components'),
					$content: path.resolve('src/content')
				}
			}
		}
	}
};

export default config;
