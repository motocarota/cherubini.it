import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(
		302,
		'https://cherubini.goatcounter.com?access-token=153l5b232x2q373w6z4es45r5861913d621s'
	);
}
