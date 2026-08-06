<script lang="ts">
	import Card from '$lib/Card.svelte';

	const data = {
		title: 'Classe III (Parte seconda)',
		img: '/c3-p2.jpg',
		prev: '/c3-p1',
		next: '/c4-p1',
		files: []
	};
</script>

<Card {data}></Card>
