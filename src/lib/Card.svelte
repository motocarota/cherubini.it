<script lang="ts">
	import Files from '$lib/Files.svelte';
	import Navigation from '$lib/Navigation.svelte';

	let { data, children } = $props();
	const { title, img, prev, next, files } = data;
</script>

<h1>{title}</h1>
<div class="card bg-base-400 bg-white shadow-sm my-4">
	{#if img}
		<img src={img} />
	{/if}
	<p>{@render children?.()}</p>
	<Files {files} />
</div>

<Navigation {next} {prev} />
