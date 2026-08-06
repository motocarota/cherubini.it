<script lang="ts">
	let { files } = $props();
</script>

<div class="flex flex-row flex-1 my-8">
	{#each files as file}
		<a href={file.url} class="btn btn-wide mx-auto link link-hover p-8">
			{file.name}
		</a>
	{/each}
</div>
