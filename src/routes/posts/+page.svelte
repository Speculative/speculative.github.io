<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Posts</h1>
<ul>
	{#each data.posts as post}
		<li><a href={`/posts/${post.moduleName}`}>{post.metadata.title}</a></li>
	{/each}
</ul>

<style>
	li + li {
		margin-top: 0.5rem;
	}
</style>
