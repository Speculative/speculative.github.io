<header>
	<div class="wrapper">
		<a id="name" href="/">Jeff Tao</a>
		<nav>
			<a href="/resume">Resume</a>
			<a href="/posts">Posts</a>
		</nav>
	</div>
</header>

<style>
	header {
		display: flex;
		flex-direction: row;
		justify-content: center;
		color: var(--background);
		background: var(--foreground);
		font-size: 1.5rem;
		padding: env(safe-area-inset);
	}

	#name {
		display: flex;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--background);
		text-decoration: none;
		transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
		font-family: var(--accentFont);
		font-size: 3rem;
	}

	#name:hover {
		color: var(--accent);
		background: var(--background);
	}

	@media (max-width: 400px) {
		#name {
			font-size: 2rem;
		}
	}

	.wrapper {
		display: flex;
		justify-content: space-between;
		padding: 2rem 1rem;
		width: var(--contentWidth);
	}

	nav {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	nav a {
		display: block;
		padding: 1rem;

		color: var(--background);
		background: transparent;
		text-decoration: none;

		transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
	}

	nav a:hover {
		color: var(--accent);
		background: var(--background);
	}
</style>
