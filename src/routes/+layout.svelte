<script lang="ts">
	import '../app.css';
	import Footer from '$lib/Footer.svelte';

	let { children } = $props();
</script>

<div class="top">
	<div class="top-container">
		<div class="top-left">
			<a href="/studenti">Studenti</a>
			<a href="/about">About</a>
		</div>
		<h2 class="top-title">
			<a href="/">Prof.ssa Silvana Cherubini </a>
		</h2>
		<div class="top-right">
			<a href="/valutazione">Griglia di valutazione</a>
			<a href="/insegnanti">Insegnanti</a>
		</div>
	</div>
</div>

<div class="content">
	{@render children()}
</div>
<!-- mixpanel -->
<Footer />
