<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import Content from '$components/Content.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
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
	:global(.headshot) {
		width: 30%;
		min-width: 240px;
		float: right;
	}

	section + section {
		margin-top: 1.5rem;
	}
</style>
