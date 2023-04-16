<script>
	import { onMount } from "svelte";
	let canvas;
	let context;

	function init() {
		canvas = document.getElementById("mainCanvas");
		context = canvas.getContext("2d");
		context.fillStyle = "hsl(211, 21%, 42%)";
		context.fillRect(0, 0, 700, 700);
	}
	// onMount function
	onMount(() => {
		init();
	});
</script>

<main>
	<h1>Welcome to SvelteKit</h1>
	<p>
		Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
	</p>
</main>

<canvas id="mainCanvas" />

<style lang="scss">
	@use "base/colors" as colors;
	@use "base/typography" as typos;

	main {
		background-color: colors.$primary-red;
	}

	#mainCanvas {
		min-width: 700px;
		min-height: 700px;
		border: 1px solid red;
	}
</style>
