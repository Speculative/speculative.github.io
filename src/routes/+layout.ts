import { redirect } from '@sveltejs/kit';
import { REDIRECTS } from './redirects';

export const prerender = true;
export const trailingSlash = 'always';

export async function load({ url }) {
	const pathname = url.pathname;

	if (pathname in REDIRECTS) {
		redirect(301, REDIRECTS[pathname]);
	}
}
