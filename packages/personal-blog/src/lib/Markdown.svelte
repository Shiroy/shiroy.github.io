<script lang="ts">
	import type { Root } from 'mdast';
	import Phrase from './Phrase.svelte';
	import Block from './Block.svelte';
	import { isPhrase, isBlock } from './utils';
	export let content: Root;
</script>

{#each content.children as e}
	{#if isPhrase(e)}
		<Phrase content={e} />
	{:else if isBlock(e)}
		<Block content={e} />
	{/if}
{/each}
