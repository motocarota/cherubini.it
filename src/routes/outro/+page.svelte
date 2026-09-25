<script lang="ts">
	import Card from '$lib/Card.svelte';

	const data = {
		title: 'Conclusione',
		description:
			'Conclusione del percorso di letteratura italiana: la voce delle donne, da Maraini ad Aleramo.',
		img: 'conclusione.webp',
		prev: '/c5-p2',
		next: null,
		files: ['18-MARAINI Marianna Ucria ALERAMO Una donna']
	};
</script>

<Card {data}>
	Manifestazione femminista a Roma contro la violenza sulle donne. Dopo secoli di inferiorizzazione
	e di confinamento nella vita domestica, le Donne diventano un nuovo soggetto sociale e, nell’arte,
	affermano i valori
</Card>
