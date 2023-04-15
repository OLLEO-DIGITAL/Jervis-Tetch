<script>
	import { onMount } from "svelte";
	let canvas;
	let context;

	function init() {
		canvas = document.getElementById("mainCanvas");
		context = canvas.getContext("2d");
		context.fillStyle = "hsl(211, 21%, 42%)";
		context.fillRect(10, 10, 100, 100);
	}
	// onMount function
	onMount(() => {
		init();
	});
</script>

<canvas id="mainCanvas" width="200" height="200" />

<main>
	<h1>Welcome to SvelteKit</h1>
	<p>
		Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	</p>
</main>

<style lang="scss">
	@use "base/colors" as colors;
	@use "base/typography" as typos;

	main {
		background-color: colors.$primary-red;
	}
</style>
