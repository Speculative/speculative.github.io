<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import type { PageData } from './$types';
	import Content from '$components/Content.svelte';

	export let data: PageData;
</script>

<main>
	<section class="bio">
		<Content content={data.Bio} />
	</section>
	<section class="publications">
		<h2>Publications</h2>
		<Content content={data.Publications} />
	</section>
	<section class="projects">
		<h2>Projects</h2>
		<Content content={data.Projects} />
	</section>
</main>

<style>
	@media (max-width: 600px) {
		:global(.headshot) {
			display: block;
			width: 30%;
			min-width: 240px;
			margin-bottom: 1rem;
			margin-left: auto;
			margin-right: auto;
		}
	}

	@media (min-width: 600px) {
		:global(.headshot) {
			width: 30%;
			min-width: 240px;
			margin-left: 1rem;
			float: right;
		}
	}

	section + section {
		margin-top: 1.5rem;
	}
</style>
