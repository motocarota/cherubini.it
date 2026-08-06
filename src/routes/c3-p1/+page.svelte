<script lang="ts">
	import Card from '$lib/Card.svelte';

	const data = {
		title: 'Classe III (Parte prima)',
		img: '/c3-p1.jpg',
		prev: '/intro',
		next: '/c3-p2',
		files: [
			'1-ANONIMO avvicinatevi fedeli',
			'10-DANTE Cacciaguida',
			'11-BOCCACCIO Andreuccio da Perugia',
			'12-PETRARCA deserti campi',
			'13-PETRARCA dolci acque',
			"2-JACOPO DA LENTINI servizio d'amore",
			'3-CAVALCANTI angiol di luce',
			'4-CAVALCANTI esilio',
			'5-DANTE selva oscura',
			'6-DANTE Francesca',
			'7-DANTE Conte Ugolino',
			'8-DANTE la vanità della fama',
			'9-DANTE maledetto fiore'
		]
	};
</script>

<Card {data}>
	Natività di Maria di Pietro Cavallini, mosaico chiesa di S. Maria in Trastevere, Roma. Qui la
	nascita è raffigurata in modo realistico, legata cioè alla fertilità femminile, e non sotto il
	velo del mistero religioso. Benché il concepimento sia attribuito solo al Padre (celeste e
	terreno), alla Madonna è riservata comunque una particolare devozione. Il Medioevo nasce sotto il
	segno del Regresso, perché è dominato da ceti parassitari (clero e nobiltà), che spesso vessano i
	lavoratori agricoli (servi), chiedendo loro di dare giornate di lavoro gratuite (corvée).
</Card>
