<script lang="ts">
	import Card from '$lib/Card.svelte';
	const data = {
		title: 'PRESENTAZIONE SITO',
		img: 'silvana.webp',
		description: 'Il progetto Passeggiate nei boschi letterari: chi lo ha creato e perché.',
		prev: null,
		next: null,
		files: []
	};
</script>

<svelte:head>
	<title>Chi Siamo | Passeggiate nei boschi letterari</title>
	<meta
		name="description"
		content="Il progetto Passeggiate nei boschi letterari: chi lo ha creato e perché."
	/>
	<link rel="canonical" href="https://silvanacherubini.it/about" />
</svelte:head>

<Card {data}>
	Silvana Cherubini. Professoressa di Liceo in pensione. LAVAGNA (GE). Questo sito è rivolto a
	Studenti di Scuola Superiore, per aiutarli a svolgere i compiti di ANALISI DEL TESTO LETTERARIO e
	per arricchire la loro cultura. Ma può interessare anche i Docenti, per confrontarsi con un METODO
	INTERATTIVO di approccio all’insegnamento letterario nelle classi del Triennio. A margine dei
	testi, offre anche spunti per l’educazione affettiva. Ho creato questo spazio, dove s’impara in
	modo attivo e coinvolgente, per suscitare l’interesse dei ragazzi verso il nostro preziosissimo
	patrimonio letterario e tramandare così il meglio della nostra civiltà. *È uno spazio gratuito.*
	Il compenso sta nella soddisfazione di rendermi utile e di veder divulgato il frutto dell’impegno
	e del sacrificio di una vita.
</Card>
