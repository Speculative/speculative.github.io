<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { prerendering } from '$app/environment';

	import vlogs from './vlogs.json';

	onMount(() => {
		// TODO: Track latest watched in localstorage
		goto(`./${vlogs[0].id}`);
	});
</script>

{#if prerendering}
	<!-- Used for page discovery when building -->
	{#each vlogs as vlog}
		<a href={`./${vlog.id}`} />
	{/each}
{/if}
