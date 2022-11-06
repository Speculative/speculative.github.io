import type { PageLoad } from './$types';
export const load: PageLoad = async () => {
	const Bio = (await import('$content/Bio.md')).default;
	const Publications = (await import('$content/Publications.md')).default;
	const Projects = (await import('$content/Projects.md')).default;

	return {
		Bio,
		Publications,
		Projects
	};
};
