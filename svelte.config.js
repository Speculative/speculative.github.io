import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import smartypants from 'remark-smartypants';
import remarkFootnotes from 'remark-footnotes';
import * as dotenv from 'dotenv';

import { REDIRECTS } from './src/routes/redirects.js';

dotenv.config();

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
			remarkPlugins: [smartypants, remarkFootnotes],
			rehypePlugins: [
				rehypeSlug,
				[
					rehypeAutolinkHeadings,
					{
						behavior: 'append',
						properties: {
							className: ['heading-anchor']
						},
						content: {
							type: 'text',
							value: '#'
						}
					}
				]
			]
		})
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build'
		}),
		trailingSlash: 'always',
		prerender: {
			handleHttpError: 'fail',
			entries: ['*', process.env.VLOG_PUBLISH_PATH, ...Object.keys(REDIRECTS)]
		}
	}
};

export default config;
