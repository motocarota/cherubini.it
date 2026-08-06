<script lang="ts">
	let { files } = $props();
</script>

<div class="flex flex-1 my-8 flex-wrap gap-7">
	{#each files as file}
		<a href={`files/${file}.docx`} class="btn btn-wide mx-auto link link-hover p-12">
			{file}
		</a>
	{/each}
</div>
