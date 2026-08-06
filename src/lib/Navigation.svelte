<script lang="ts">
	let { prev, next } = $props();
</script>

<div class="flex flex-row justify-between">
	<div>
		{#if prev}
			<a href={prev} class="btn btn-ghost"> &lt; Pagina precedente</a>
		{/if}
	</div>
	<div>
		{#if next}
			<a href={next} class="btn btn-ghost">Pagina successiva &gt; </a>
		{/if}
	</div>
</div>
