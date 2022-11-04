<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let content: SvelteComponent;
</script>

<div class="top">
	<svelte:component this={content} />
</div>

<style>
</style>
