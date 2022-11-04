<script context="module" type="ts">
	import type { Load } from './__types/index';
	export const load: Load = async () => {
		const Bio = (await import('$content/Bio.md')).default;

		return {
			props: {
				Bio
			}
		};
	};
</script>

<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import Content from '$components/Content.svelte';

	export let Bio: SvelteComponent;
</script>

<main>
	<section class="bio">
		<Content content={Bio} />
	</section>
</main>

<style>
	.bio {
		max-width: 80rem;
	}

	:global(.headshot) {
		width: 30%;
		float: right;
	}
</style>
