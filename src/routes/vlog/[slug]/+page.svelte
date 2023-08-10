<script lang="ts">
	import type { PageData } from './$types';
	import vlogs from '../vlogs.json';

	export let data: PageData;
	$: selectedVlog = vlogs.find((vlog) => vlog.id === data.videoId);

	function stripExtension(name: string) {
		return name.replace(/\.[^.]+$/, '');
	}

	// https://drive.google.com/uc?id=FILE_ID&export=download
</script>

<div id="vlog-container">
	{#if selectedVlog}
		<h1>{stripExtension(selectedVlog.name)}</h1>
		<!--
		Player	
		-->
		<iframe
			id="vlog-frame"
			src={`https://drive.google.com/file/d/${selectedVlog.id}/preview`}
			width="1280"
			height="720"
			allow="autoplay"
			frameborder="0"
			allowfullscreen
			title="jeff.log"
		/>
		<section id="description">
			{selectedVlog.description ?? '¯\\_(ツ)_/¯'}
		</section>
	{:else}
		No such vlog! {selectedVlog}
	{/if}

	<!--
	Playlist
	-->
	<section id="playlist">
		{#each vlogs as vlog}
			<div class="playlist-entry-wrapper">
				<div class="playlist-entry">
					<a href={`../${vlog.id}`} class="playlist-entry-link">
						<div class="entry-contents">
							<img src={vlog.thumbnailLink} alt={vlog.name} />
							<p>{stripExtension(vlog.name)}</p>
						</div>
					</a>
				</div>
			</div>
		{/each}
	</section>
</div>

<style>
	#vlog-container {
		display: flex;
		flex-direction: column;
		padding: 2rem 1rem;
		overflow-x: hidden;
		max-width: calc(min(100vw, calc(1280px + 2rem)));
	}

	#vlog-frame {
		max-width: 100%;
		/* max-height: calc(9 * 100% / 16); */
		height: auto;
		aspect-ratio: 16 / 9;
		margin-bottom: 1rem;
	}

	#description {
		margin-bottom: 1rem;
	}

	#playlist {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
		row-gap: 1.5rem;
	}

	.playlist-entry-link {
		padding: 1rem 0;
		text-decoration: none;
		color: inherit;
	}

	.playlist-entry-wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.playlist-entry {
		display: flex;
		flex-direction: column;

		align-items: center;

		width: 250px;

		/* Visual centering due to drop shadow */
		transform: translateX(-0.5rem);
		border: 4px solid var(--foreground);
		color: var(--foreground);
		box-shadow: 0.5rem 0.5rem var(--accent);
		transition: box-shadow 0.2s ease-in-out, border-color 0.2s ease-in-out, color 0.2s ease-in-out,
			background-color 0.2s ease-in-out;
	}

	/* Seen
	.playlist-entry * {
		opacity: 0.8;
	}
	*/

	.entry-contents {
		display: flex;
		flex-direction: column;

		font-family: var(--accentFont);
	}

	.entry-contents img {
		width: max-content;
	}

	.playlist-entry:hover {
		box-shadow: 0 0;
		border-color: var(--accent);
		color: var(--background);
		background: var(--accent);
	}
</style>
