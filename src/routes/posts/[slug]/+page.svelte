<script lang="ts">
	import type { PageData } from './$types';
	import Content from '$components/Content.svelte';

	export let data: PageData;
</script>

{#await import(`../../../content/posts/${data.moduleName}.md`)}
	Loading...
{:then post}
	<h1>{post.metadata.title}</h1>
	<Content content={post.default} />
{:catch error}
	Failed to load post! {error.message}
{/await}
