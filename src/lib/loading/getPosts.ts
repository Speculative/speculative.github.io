import path from 'path';

export const getPosts = async () => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('../../content/posts/*.md')).map(
			async ([modulePath, resolver]) => {
				const { metadata } = await resolver();
				return {
					metadata,
					moduleName: path.parse(modulePath).name
				};
			}
		)
	);

	return posts;
};
