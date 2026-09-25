<script lang="ts">
	import Files from '$lib/Files.svelte';
	import Navigation from '$lib/Navigation.svelte';
	import { page } from '$app/state';

	let { data, children } = $props();
</script>

<svelte:head>
	<title>{data.title} | Passeggiate nei boschi letterari</title>
	{#if data.description}
		<meta name="description" content={data.description} />
	{/if}
	<link rel="canonical" href={`https://silvanacherubini.it${page.url.pathname}`} />
</svelte:head>

<h1>{data.title}</h1>
<div class="card bg-base-400 bg-white shadow-sm my-4">
	{#if data.img}
		<img src={data.img} alt={data.title} />
	{/if}
	<p class="m-6">{@render children?.()}</p>
	<Files files={data.files} />
</div>

<Navigation next={data.next} prev={data.prev} />
