<script lang="ts">
	import { onMount } from 'svelte';

	onMount(async () => {
		if (window.location.hash) {
			const scrollTarget = document.querySelector(window.location.hash);
			scrollTarget?.scrollIntoView({
				behavior: 'smooth'
			});
		}
	});

	export let content: typeof import('*.md');
</script>

<div class="top">
	<svelte:component this={content} />
</div>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}

	:global(article h1) {
		margin-top: 2rem;
	}

	:global(article h1) {
		margin-bottom: 0.5rem;
	}

	:global(.heading-anchor) {
		visibility: hidden;
		margin-left: 0.2rem;
		text-decoration: none;
	}

	:global(h1:hover .heading-anchor, h2:hover .heading-anchor, h3:hover .heading-anchor) {
		visibility: visible;
	}

	:global(img) {
		margin-top: 1rem;
		margin-bottom: 1rem;
		max-width: 100%;
	}

	:global(.footnotes) {
		margin-top: 1rem;
	}

	:global(.footnote-backref) {
		font-family: 'Noto Color Emoji';
		text-decoration: none;
		margin-left: 0.5rem;
	}

	@keyframes target {
		from {
			background: transparent;
		}
		20% {
			background: var(--accent);
			color: var(--background);
		}
		to {
			background: transparent;
			color: inherit;
		}
	}

	:global(:target) {
		animation-name: target;
		animation-duration: 1.5s;
		animation-iteration-count: 1;
		animation-timing-function: ease-in-out;
	}

	:global(:target a) {
		animation-name: target;
		animation-duration: 1.5s;
		animation-iteration-count: 1;
		animation-timing-function: ease-in-out;
	}

	:global(sup) {
		vertical-align: top;
		position: relative;
		top: -0.4rem;
	}
</style>
