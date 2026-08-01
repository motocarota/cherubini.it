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

<div class="flex-row p-4 flex gap-4 flex-wrap">
	{#each links as link}
		<div>
			<a href={link.href} class="link link-hover btn">
				{link.label}
			</a>
		</div>
	{/each}
</div>
