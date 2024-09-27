<script lang="ts">
	import { onMount } from 'svelte';

	export let content: typeof import('*.md');

	onMount(() => {
		console.log('content', content);
	});
</script>
