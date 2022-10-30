import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import fs from 'fs'
import * as path from 'path';
import { fileURLToPath } from 'url'

function getBlogPostSlugs() {
	const currentFile = new URL(import.meta.url).href;
	const currentDir = path.dirname(fileURLToPath(currentFile))
	const articlesDir = `${currentDir}/src/lib/articles`

	const result = []

	const files = fs.readdirSync(articlesDir);
	for (let file of files) {
		if (!fs.statSync(path.join(articlesDir, file)).isDirectory()) {
			throw new Error(`Unexpected file ${file} in articles directory`)
		}

		result.push(file)
	}

	return result
}

const slugs = getBlogPostSlugs();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter(),
		prerender: {
			entries: slugs.map(s => `/post/${s}`)
		}
	}
};

export default config;
