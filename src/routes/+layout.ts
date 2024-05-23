import { redirect } from '@sveltejs/kit';
import { REDIRECTS } from './redirects';

export const prerender = true;

export async function load({ url }) {
	const pathname = url.pathname;

	if (pathname in REDIRECTS) {
		throw redirect(301, REDIRECTS[pathname]);
	}
}
