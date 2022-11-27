<script lang="ts">
	import type { Root } from 'mdast';
	import Phrase from './markdown/Phrase.svelte';
	import Block from './markdown/Block.svelte';
	import { isPhrase, isBlock } from './markdown/utils';
	export let content: Root;
</script>

{#each content.children as e}
	{#if isPhrase(e)}
		<Phrase content={e} />
	{:else if isBlock(e)}
		<Block content={e} />
	{/if}
{/each}
