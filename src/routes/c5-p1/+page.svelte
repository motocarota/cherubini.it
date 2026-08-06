<script lang="ts">
	import Card from '$lib/Card.svelte';

	const data = {
		title: 'Classe V (Parte prima)',
		img: '/c5-p1.png',
		prev: '/c4-p2',
		next: '/c5-p2',
		files: [
			'9-UNGARETTI paese straziato',
			'8-PASTERNAK Jurij Zivago e la rivoluzione',
			'7-SVEVO lo strano matrimonio di Zeno',
			'11-MONTALE casa abbandonata CAPRONI',
			'6-PIRANDELLO le maschere e la pazzia',
			"2-PASCOLI cader di foglie D'ANNUNZIO",
			'10-MONTALE creuze di Liguria',
			'4-MARINETTI automobile ebbrrra',
			'3-GOZZANO il mondo di Felicita',
			'5-KAFKA la metamorfosi di Gregor',
			'1-CARDUCCI Maremma toscana'
		]
	};
</script>

<Card {data}>
	Il Porto di Genova con la Lanterna: poco più a destra si trovano gli ex Cantieri Ansaldo (oggi
	Fincantieri) nati nel 1853 e cresciuti via via dopo l’unità d’Italia. È “il fervore notturno degli
	arsenali e dei cantieri” di cui parla il Futurismo. La Rivoluzione Industriale determina un enorme
	sviluppo delle forze produttive e l’ascesa al potere della borghesia. Però, il benessere così
	raggiunto non sempre è per tutti coloro che hanno contribuito a produrlo. La letteratura
	dell’industria, che denuncia i limiti dello sfruttamento capitalistico delle masse operaie, in
	Inghilterra e in Francia crea capolavori. In Italia, invece, tarda ad affermarsi.
</Card>
