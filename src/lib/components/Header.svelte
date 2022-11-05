<header>
	<div class="wrapper">
		<h1><a href="/">Jeff Tao</a></h1>
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
	}

	h1 a {
		color: var(--background);
		text-decoration: none;
		transition: color 0.2s ease-in-out, background 0.2s ease-in-out;
	}

	h1 a:hover {
		color: var(--accent);
		background: var(--background);
	}

	/*
	h1 a {
		color: var(--background);
		text-decoration: none;
		position: relative;
	}

	h1 a::after {
		content: ' ';

		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;

		border-top: 2px var(--background) solid;

		transition: width 0.2s ease-in-out;
	}

	h1 a:hover::after {
		width: 100%;
	}
	*/

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
