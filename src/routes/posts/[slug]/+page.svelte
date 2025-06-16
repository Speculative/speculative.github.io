<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
	import type { PageData } from './$types';
	import Content from '$components/Content.svelte';

	export let data: PageData;
</script>

<a class="back" href="/posts"><Fa icon={faCaretLeft} /> Back to posts</a>

<article>
	{#await import(`../../../content/posts/${data.moduleName}.md`)}
		Loading...
	{:then post}
		<h1 class="title">{post.metadata.title}</h1>
		<Content content={post.default} />
	{:catch error}
		Failed to load post! {error.message}
	{/await}
</article>

<style>
	.title {
		display: block;
		color: var(--accent);
		font-weight: bold;
		font-size: 2rem;
		margin-top: 0;
		margin-bottom: 1rem;
		width: 100%;
		border-bottom: 2px solid var(--accent);
	}

	.back {
		display: inline-block;
		margin-bottom: 1rem;

		text-decoration: none;
		color: var(--foreground);
		background: transparent;

		transition: color 0.2s ease-in-out;
	}

	.back:hover {
		color: var(--accent);
	}
</style>
