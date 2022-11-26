import { marked } from 'marked';
import type { Renderer } from 'marked';
import fs from 'fs';
import { json, error } from '@sveltejs/kit';
import type { PageServerLoadEvent } from './$types';
import * as path from 'path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGFM from 'remark-gfm';
import { parse as YAMLParse } from 'yaml';
import { z } from 'zod';

export const prerender = true;

const frontMatterValidator = z.object({
	title: z.string().trim(),
	author: z.string().trim()
});

function validateFrontmatter(data: string) {
	const frontMatterData = YAMLParse(data);
	try {
		return frontMatterValidator.parse(frontMatterData);
	} catch (e) {
		console.error(e);
		throw error(500, 'Error with the blog content');
	}
}

export async function load({ params }: PageServerLoadEvent) {
	//console.log(process.cwd());

	const slug = params.slug;

	const articleDir = path.join('src/lib/articles', slug);
	const articleMarkdownSource = path.join(articleDir, '+article.md');
	const metadataFile = path.join(articleDir, '+metadata.json');

	const source = fs.readFileSync(articleMarkdownSource, { encoding: 'utf-8' });
	const metadataStr = fs.readFileSync(metadataFile, { encoding: 'utf-8' });
	//const metadata = JSON.parse(metadataStr);

	const processor = unified().use(remarkParse).use(remarkFrontmatter, ['yaml']).use(remarkGFM);

	const data = await processor.parse(source);

	const frontmatter = data.children.splice(0, 1)[0];

	// Check for frontmatter
	if (!frontmatter || frontmatter.type !== 'yaml') {
		console.error(`Frontmatter not found for article ${slug}`);
		throw error(404, 'Not found');
	}

	const metadata = validateFrontmatter(frontmatter.value);

	console.log(metadata);

	console.log(JSON.stringify(data, null, 2));

	return {
		title: metadata.title,
		author: metadata.author,
		content: data,
		slug
	};
}
//https://github.com/aws-samples/aws-stf-core-scorpio/raw/main/docs/images/scorpio_arch.png
