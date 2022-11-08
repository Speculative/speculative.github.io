<script lang="ts">
	export let content: typeof import('*.md');
</script>

<div class="top">
	<svelte:component this={content} />
</div>

<style>
	:global(article h1:not(:first-of-type)) {
		margin-top: 2rem;
	}

	:global(article h1) {
		margin-bottom: 1rem;
	}

	:global(.heading-anchor) {
		visibility: hidden;
		margin-left: 0.2rem;
		text-decoration: none;
	}

	:global(h1:hover .heading-anchor, h2:hover .heading-anchor, h3:hover .heading-anchor) {
		visibility: visible;
	}
</style>
