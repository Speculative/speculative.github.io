---
title: Hodllive
slug: hodllive
---

<script>
	let count = 0;
	
	function handleClick() {
		count += 1;
	}
</script>

Test post please ignore.

<button on:click={handleClick}>
	clicks: {count}
</button>
