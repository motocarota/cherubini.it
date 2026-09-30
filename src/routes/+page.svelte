<script lang="ts">
	import Esercizi from '$lib/Esercizi.svelte';
</script>

<svelte:head>
	<title>Letteratura Italiana Classica | Guide per Studenti e Insegnanti</title>
	<meta
		name="description"
		content="Analisi, riassunti e materiali didattici sui classici della letteratura italiana per studenti e insegnanti."
	/>
	<link rel="canonical" href="https://silvanacherubini.it/" />
</svelte:head>

<section class="hero">
	<h1 class="text-4xl md:text-5xl font-display bg-white/80 px-6 py-2 hidden">
		Passeggiate nei boschi letterari
	</h1>
	<p class="text-lg bg-white/80 px-6 py-1 mt-2 hidden">
		Lezioni gratuite sui classici della letteratura italiana, a cura di una professoressa in
		pensione
	</p>
</section>

<Esercizi />
