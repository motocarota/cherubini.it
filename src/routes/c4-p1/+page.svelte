<script lang="ts">
	import Card from '$lib/Card.svelte';

	const data = {
		title: 'Classe IV (Parte prima)',
		img: '/c4-p1.jpg',
		prev: '/c3-p2',
		next: '/c4-p2',
		files: [
			'3-GALILEO mondo di carta',
			'7-PARINI il risveglio del contadino',
			'1-TASSO pianto delle stelle',
			"9-ALFIERI il gran tour dell'Europa",
			'5-BECCARIA i lumi della giustizia',
			'8-MOZART Don Giovanni, o il dissoluto punito',
			'4-DEFOE Robinson, il nuovo Adamo',
			'6-GOLDONI Mirandolina',
			'2-CERVANTES mulini a vento'
		]
	};
</script>

<Card {data}>
	Galileo presenta il cannocchiale al doge di Venezia Leonardo Donati di Giuseppe Bertini, affresco
	di Villa Ponti, Biumo di Varese. La Rivoluzione Scientifica, che ha origine nel clima ostile della
	Controriforma, ha il suo fondamento nella ragione, che avrà il suo trionfo con l’Illuminismo.
	L’evoluzione tecnologica, guidata dalla Scienza, conduce ad una crescita economica degli Stati
	Europei. Nasce così il mito del Progresso. Della donna ora si apprezza anche l’intelligenza.
</Card>
