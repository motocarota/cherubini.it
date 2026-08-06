<script lang="ts">
	import '../app.css';
	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
</script>

<div class="top">
	<div class="top-container">
		<div class="top-left">
			<a href="/">Home </a>
			<a href="/studenti">Studenti</a>
			<a href="/insegnanti">Insegnanti</a>
		</div>
		<div class="top-right">
			<a href="/files/griglia.docx">Griglia di valutazione</a>
		</div>
	</div>
</div>

<div class="content">
	{@render children()}
</div>
<!-- mixpanel -->
<Footer />
