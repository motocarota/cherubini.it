import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(302, 'https://cherubini.goatcounter.com');
}
