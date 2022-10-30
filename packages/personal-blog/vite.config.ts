import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import dynamicImport from 'vite-plugin-dynamic-import';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		imagetools({
			defaultDirectives(url) {
				return new URLSearchParams({
					w: '500;900;1200',
					webp: '',
					srcset: ''
				});
			}
		}),
		dynamicImport()
	]
};

export default config;
