<script lang="ts">
	import { resolve } from '$app/paths';

	const links = [
		{ href: '/archive', label: 'Archive' },
		{ href: '/characters', label: 'Characters' },
		{ href: '/about', label: 'About' },
		{ href: '/support', label: 'Support' },
		{ href: '/links', label: 'Links' }
	];
</script>

<div class="bg-white w-screen">
	<div class="text-center">
		<a href={resolve('/')}>
			<img src="/banner.png" alt="AOQTD" class="mx-auto w-auto max-w-[400px]" />
		</a>
	</div>
	<nav class="border-base-300 border-t">
		<ul class="flex flex-wrap justify-center gap-4 p-3">
			{#each links as item (item.href)}
				<li>
					<a href={resolve(item.href)} class="text-xs">
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</div>
