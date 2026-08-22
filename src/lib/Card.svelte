<script lang="ts">
	import Files from '$lib/Files.svelte';
	import Navigation from '$lib/Navigation.svelte';

	let { data, children } = $props();
</script>

<h1>{data.title}</h1>
<div class="card bg-base-400 bg-white shadow-sm my-4">
	{#if data.img}
		<img src={data.img} alt={data.title} />
	{/if}
	<p>{@render children?.()}</p>
	<Files files={data.files} />
</div>

<Navigation next={data.next} prev={data.prev} />
