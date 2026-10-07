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
	affermano i valori della parità dei sessi e della libera autodeterminazione femminile, a
	cominciare dall’ingresso nel mondo del lavoro. All’uomo sono richiesti una maggiore responsabilità
	nell’ambito familiare e una più adeguata sensibilità affettiva.
</Card>
