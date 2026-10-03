<script>
	import { resolve } from '$app/paths';
</script>

<div class="flex justify-between p-4 bg-gray-700">
	<div class="flex flex-row gap-8">
		<a href={resolve('/')}>Home </a>
		<a href={resolve('/studenti')}>Studenti</a>
		<a href={resolve('/insegnanti')}>Insegnanti</a>
	</div>
	<div class="flex flex-row gap-8">
		<a href={resolve('/about')}>Su di me</a>
		<a href="/files/griglia.docx">Griglia di valutazione</a>
	</div>
</div>
