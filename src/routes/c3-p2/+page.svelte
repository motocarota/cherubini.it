<script lang="ts">
	import Card from '$lib/Card.svelte';

	const data = {
		title: 'Classe III (Parte seconda)',
		img: '/c3-p2.webp',
		prev: '/c3-p1',
		next: '/c4-p1',
		files: [
			'17-MACHIAVELLI i volti del potere',
			"14-POLIZIANO Simonetta, l'anti-Didone",
			'15-ARIOSTO donne e cavallier',
			'18-SHAKESPEARE Giulietta',
			'16-ARIOSTO la pazzia di Orlando'
		]
	};
</script>

<Card {data}>
	La Primavera di Botticelli, quadro della Galleria degli Uffizi, Firenze. Nel Rinascimento si
	riscoprono i miti pagani, che celebrano la potenza generatrice della Natura ed esaltano la
	bellezza e la grazia della donna.
</Card>
