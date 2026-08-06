<script lang="ts">
	import Card from '$lib/Card.svelte';

	const data = {
		title: 'Classe IV (Parte seconda)',
		img: '/c4-p2.png',
		prev: '/c4-p1',
		next: '/c5-p1',
		files: [
			'14-MANZONI Lucia e la notte degli imbrogli',
			"17-VERGA 'Ntoni e il nonno (pescatori)",
			'13-MANZONI intrigo in canonica',
			'12-LEOPARDI un villaggio esemplare',
			"18-VERGA l'addio di 'Ntoni DELEDDA Marianna Sirca",
			"10-FOSCOLO Zacinto e il mito dell'Ellade",
			'16-HUGO Gavroche sulle barricate di Parigi',
			'11-LEOPARDI luna amica',
			"15-MAMELI fratelli d'Italia NIEVO Confessioni"
		]
	};
</script>

<Card {data}>
	Il bacio di Hayez, quadro della Pinacoteca di Brera, Milano. Il dipinto è un inno
	all’amore-passione, che (assieme all’amicizia) fa parte della scoperta del privato, tipica del
	Romanticismo, nell’età della Restaurazione. Ma il dipinto allude anche all’alleanza
	franco-piemontese che porterà alla cacciata degli Austriaci dalla Lombardia. L’altro grande tema,
	infatti, è la libertà della patria, valore che dalla Rivoluzione Francese trapassa al Risorgimento
	d’Italia.
</Card>
