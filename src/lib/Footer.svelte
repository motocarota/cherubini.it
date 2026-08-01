<script lang="ts">
	import { resolve } from '$app/paths';

	const year = new Date().getFullYear();
</script>

<footer class="text-center text-xs mt-8 p-4 align-middle">
	Passeggiate nei boschi letterari &copy; {year} Prof.ssa Silvana Cherubini.
	<a href={resolve('/license')} class="link link-hover hover:text-primary"> CC BY-NC-ND 4.0 </a>
</footer>
