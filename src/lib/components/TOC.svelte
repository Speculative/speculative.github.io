<script lang="ts">
	export let headingSelector: string = 'h1, h2, h3, h4';
	let headings: HTMLHeadingElement[] = [];
	let activeHeading: HTMLHeadingElement | null = null;

	function requery_headings() {
		if (typeof document === `undefined`) {
			return;
		}
		headings = [...document.querySelectorAll(headingSelector)] as HTMLHeadingElement[];
	}
</script>
