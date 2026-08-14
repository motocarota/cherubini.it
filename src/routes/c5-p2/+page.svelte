<script lang="ts">
	import Card from '$lib/Card.svelte';

	const data = {
		title: 'Classe V (Parte seconda)',
		img: '/c5-p2.png',
		prev: '/c5-p1',
		next: '/outro',
		files: [
			"17-CAMILLERI Montalbano, un eroe dell'intelligenza contro l'illegalita'",
			"12-FENOGLIO Johnny, o l'epica del ribelle LEVI l'Inferno di Auschwitz",
			"13-DE FILIPPO Filumena Marturano, un'eroina della responsabilita'",
			'14-TOMASI DI LAMPEDUSA la terra del rimorso',
			"16-GUCCINI Dio e' morto",
			"15-PASOLINI la vitalita' dei reietti"
		]
	};
</script>

<Card {data}>
	Sfilata dei partigiani il 6 maggio 1945 a Milano per festeggiare la liberazione dall’occupazione
	nazi-fascista. La catastrofe di due guerre mondiali (causate dal nazionalismo e dal nazi-fascismo)
	genera una volontà di riscossa - promossa dalla Resistenza -, che si prolunga anche nel secondo
	dopoguerra. In Europa si diffondono i valori dell’uguaglianza e dell’aspirazione alla pace.
	All’occorrenza, le donne sono state in grado di esprimere coraggio, a fianco dei partigiani
	combattenti, e questo frutta loro il “diritto di voto”.
</Card>
