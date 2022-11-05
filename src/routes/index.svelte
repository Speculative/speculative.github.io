<script context="module" type="ts">
	import type { Load } from './__types/index';
	export const load: Load = async () => {
		const Bio = (await import('$content/Bio.md')).default;
		const Publications = (await import('$content/Publications.md')).default;
		const Projects = (await import('$content/Projects.md')).default;

		return {
			props: {
				Bio,
				Publications,
				Projects
			}
		};
	};
</script>

<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import Content from '$components/Content.svelte';

	export let Bio: SvelteComponent;
	export let Publications: SvelteComponent;
	export let Projects: SvelteComponent;
</script>

<main>
	<section class="bio">
		<Content content={Bio} />
	</section>
	<section class="publications">
		<h2>Publications</h2>
		<Content content={Publications} />
	</section>
	<section class="projects">
		<h2>Projects</h2>
		<Content content={Projects} />
	</section>
</main>

<style>
	:global(.headshot) {
		width: 30%;
		min-width: 240px;
		float: right;
	}

	section + section {
		margin-top: 1.5rem;
	}
</style>
