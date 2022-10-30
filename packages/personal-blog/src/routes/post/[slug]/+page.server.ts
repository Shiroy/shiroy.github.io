import { marked } from 'marked';
import type { Renderer } from 'marked';
import fs from 'fs';
import { json } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import * as path from 'path';

export const prerender = true;

export async function load({ params }: PageServerLoadEvent) {
	//console.log(process.cwd());

	const slug = params.slug;

	const articleDir = path.join('src/lib/articles', slug);
	const articleMarkdownSource = path.join(articleDir, '+article.md');
	const metadataFile = path.join(articleDir, '+metadata.json');

	const source = fs.readFileSync(articleMarkdownSource, { encoding: 'utf-8' });
	const metadataStr = fs.readFileSync(metadataFile, { encoding: 'utf-8' });
	const metadata = JSON.parse(metadataStr);

	const tokens = marked.lexer(source);
	// fs.writeFileSync(
	// 	'/Users/antoine/Personal Website/personal-blog/packages/personal-blog/src/routes/tokens.json',
	// 	JSON.stringify(tokens, null, 2)
	// );

	return {
		title: metadata.title,
		author: metadata.author,
		content: tokens,
		slug
	};
}
//https://github.com/aws-samples/aws-stf-core-scorpio/raw/main/docs/images/scorpio_arch.png
