<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Posts</h1>
{#each data.posts as post}
	<a href={`/posts/${post.moduleName}`}>{post.metadata.title}</a>
{/each}

<style>
	h1 {
		font-weight: bold;
		margin-bottom: 1rem;
	}

	a {
		display: block;
		text-decoration: none;
		font-family: var(--accentFont);
		font-size: 2rem;
		width: 100%;
		border: 4px solid var(--foreground);
		padding: 1rem;
		box-shadow: 0.5rem 0.5rem var(--accent);
		color: var(--foreground);

		transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out,
			background-color 0.2s ease-in-out;
	}

	a:hover {
		box-shadow: 0 0;
		border-color: var(--accent);
		color: var(--background);
		background: var(--accent);
	}

	a + a {
		margin-top: 1.5rem;
	}
</style>
