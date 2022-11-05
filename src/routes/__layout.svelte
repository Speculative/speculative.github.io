<script>
	import '$styles/global.scss';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
</script>

<div class="root">
	<Header />
	<main>
		<div class="wrapper">
			<slot />
		</div>
	</main>
	<Footer />
</div>

<style>
	.root {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 100%;
	}
	main {
		flex-grow: 1;

		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.wrapper {
		width: var(--contentWidth);
		padding: 2rem 1rem;
		overflow-x: hidden;
	}
</style>
