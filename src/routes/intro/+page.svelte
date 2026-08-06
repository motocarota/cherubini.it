<script lang="ts">
	import Card from '$lib/Card.svelte';

	const data = {
		title: 'Premessa',
		img: 'premessa.jpg',
		prev: null,
		next: '/c3-p1',
		files: ["VIRGILIO lodi dell'Italia"]
	};
</script>

<Card {data}>
	Centuriazione dei campi coltivati lungo la via Emilia. Nell’antica Roma (pur in presenza di una
	componente schiavile) la società è fondata sulla piccola proprietà contadina, dalle cui fila si
	traggono anche i legionari per l’esercito. La letteratura, che ne rispecchia i valori dalla
	moralità del lavoro alla fedeltà coniugale, crea opere classiche, cioè eterne.
</Card>
