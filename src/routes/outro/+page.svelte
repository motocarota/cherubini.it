<script lang="ts">
	import Card from '$lib/Card.svelte';

	const data = {
		title: 'Premessa',
		img: 'conclusione.jpg',
		prev: '/c5-p2',
		next: null,
		files: [
			{
				name: 'MARAINI Marianna Ucrìa ALERAMO Una donna',
				url: 'var/18-MARAINI Marianna Ucrìa ALERAMO Una donna.docx'
			}
		]
	};
</script>

<Card {data}>
	Manifestazione femminista a Roma contro la violenza sulle donne. Dopo secoli di inferiorizzazione
	e di confinamento nella vita domestica, le Donne diventano un nuovo soggetto sociale e, nell’arte,
	affermano i valori
</Card>
