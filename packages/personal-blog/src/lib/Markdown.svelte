<script lang="ts">
	import type { Root } from 'mdast';
	import Phrase from './markdown/Phrase.svelte';
	import Block from './markdown/Block.svelte';
	import { isPhrase, isBlock } from './markdown/utils';
	export let content: Root;
	import { slugger } from './markdown/symbols';
	import GithubSlugger from 'github-slugger';
	import { setContext } from 'svelte';

	setContext(slugger, new GithubSlugger());
</script>

{#each content.children as e}
	{#if isPhrase(e)}
		<Phrase content={e} />
	{:else if isBlock(e)}
		<Block content={e} />
	{/if}
{/each}
