import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: vercel(),
	},
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: preprocess({
		scss: {
			includePaths: ['./src/lib/styles']
		}
	}),
};

export default config;
