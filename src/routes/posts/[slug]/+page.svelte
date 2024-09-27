<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';
	import Toc from 'svelte-toc';
	import type { PageData } from './$types';
	import Content from '$components/Content.svelte';

	export let data: PageData;
</script>

<a class="back" href="/posts"><Fa icon={faCaretLeft} /> Back to posts</a>

<div class="toc-wrapper">
	<Toc
		title="Contents"
		headingSelector=":is(h1, h2, h3, h4):not(.toc-exclude)"
		getHeadingTitles={(element) => element?.textContent?.slice(0, -1) ?? 'No title'}
		minItems={2}
		--toc-min-width="400px"
		--toc-desktop-max-width="400px"
		--toc-li-color="var(--foreground)"
		--toc-li-hover-color="var(--accent)"
		--toc-active-color="var(--background)"
		--toc-active-bg="var(--accent)"
		--toc-padding="0"
	/>
</div>
<article>
	{#await import(`../../../content/posts/${data.moduleName}.md`)}
		Loading...
	{:then post}
		<h1 class="toc-exclude">{post.metadata.title}</h1>
		<Content content={post.default} />
	{:catch error}
		Failed to load post! {error.message}
	{/await}
</article>

<style>
	.toc-wrapper {
		height: 0;
		transform: translateX(var(--contentWidth));
		position: sticky;
		top: 1rem;
	}

	h1 {
		display: block;
		color: var(--accent);
		font-weight: bold;
		font-size: 2rem;
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
