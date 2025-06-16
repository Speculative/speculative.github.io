import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const prerender = true;

export const load: PageServerLoad = async ({ params }) => {
	const post = await import(`../../../content/posts/${params.slug}.md`);

	if (post.metadata.redirect) {
		throw redirect(302, post.metadata.redirect);
	}

	return {
		moduleName: params.slug
	};
};
