<script lang="ts">
	export let content: typeof import('*.md');
</script>

<div class="top">
	<svelte:component this={content} />
</div>

<style>
</style>
