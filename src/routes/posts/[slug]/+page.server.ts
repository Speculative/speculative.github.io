import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { getPosts } from '$lib/loading/getPosts';

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
	/*
	const posts = await getPosts();
	const post = posts.find((post) => post.metadata.slug === params.slug);
	if (!post) {
		throw error(404, 'Not found');
	}

	const { moduleName } = post;
	*/

	return {
		moduleName: params.slug
	};
};
