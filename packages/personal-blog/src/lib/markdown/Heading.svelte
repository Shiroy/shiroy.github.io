<script lang="ts" context="module">
	import type { Content } from 'mdast';

	function getTextContentInner(content: Content): string {
		if (content.type === 'text') {
			return content.value;
		} else {
			const children: Content[] = (content as any).children ?? [];
			return getTextContent(children);
		}
	}

	function getTextContent(content: Content[]): string {
		return content.map((c) => getTextContentInner(c)).join();
	}
</script>

<script lang="ts">
	import type { Heading } from 'mdast';
	import Phrase from './Phrase.svelte';
	export let content: Heading;
	import type GithubSlugger from 'github-slugger';
	import { getContext } from 'svelte';
	import { slugger } from './symbols';
	let tag = `h${content.depth}`;
	let githubSlugger = getContext<GithubSlugger>(slugger);
	let id = githubSlugger.slug(getTextContent(content.children));
</script>

<svelte:element this={tag} {id}>
	{#each content.children as e}
		<Phrase content={e} />
	{/each}
</svelte:element>

<style>
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		@apply mb-6;
	}

	h1 {
		@apply text-4xl;
		@apply font-bold;
	}

	h2 {
		@apply text-3xl;
		@apply font-bold;
	}

	h3 {
		@apply text-2xl;
		@apply font-semibold;
	}

	h4 {
		@apply text-xl;
		@apply font-semibold;
	}

	h5 {
		@apply text-base;
		@apply font-semibold;
	}

	h6 {
		@apply text-sm;
		@apply font-semibold;
	}
</style>
