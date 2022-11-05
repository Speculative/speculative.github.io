<script lang="ts">
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons/index.js';
</script>

<footer>
	<div class="wrapper">
		<ul class="socials">
			<li>
				<a href="https://github.com/Speculative/"
					><Fa icon={faGithub} /><span class="label">speculative</span></a
				>
			</li>
			<li>
				<a href="https://www.linkedin.com/in/jeffreytao/"
					><Fa icon={faLinkedinIn} /><span class="label">jeffreytao</span></a
				>
			</li>
		</ul>
	</div>
</footer>

<style>
	footer {
		color: var(--background);
		background: var(--foreground);

		padding: 2rem 1rem;

		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}

	.wrapper {
		width: var(--contentWidth);
	}

	.socials {
		list-style: none;
		padding: 0;
	}

	.socials li {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.socials a {
		color: var(--background);
		text-decoration: none;
		padding: 0.2rem 1rem;

		transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
	}

	.socials a:hover {
		background-color: var(--background);
		color: var(--accent);
	}

	:global(.socials a > *:first-of-type) {
		width: 16px;
	}

	.socials .label {
		margin-left: 0.5rem;
	}
</style>
