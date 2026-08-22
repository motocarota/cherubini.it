<script lang="ts">
	const links = [
		{ href: '/intro', label: 'Premessa' },
		{ href: '/c3-p1', label: 'Esercizi III prima parte' },
		{ href: '/c3-p2', label: 'Esercizi III seconda parte' },
		{ href: '/c4-p1', label: 'Esercizi IV prima parte' },
		{ href: '/c4-p2', label: 'Esercizi IV seconda parte' },
		{ href: '/c5-p1', label: 'Esercizi V prima parte' },
		{ href: '/c5-p2', label: 'Esercizi V seconda parte' },
		{ href: '/outro', label: 'Conclusione' }
	];
</script>

<div class="flex flex-1 my-8 flex-wrap gap-5">
	{#each links as link (link.href)}
		<a href={link.href} class="btn w-32 max-w-32 min-w-32 mx-auto link link-hover p-12 h-40">
			{link.label}
		</a>
	{/each}
</div>
