<script lang="ts">
	import type { Blockquote } from 'mdast';
	import Block from './Block.svelte';
	import { isBlock } from './utils';
	export let content: Blockquote;
</script>

<p class="border-l-4 border-gray-300 pl-4 ml-4 italic mb-4">
	{#each content.children as e}
		{#if isBlock(e)}
			<Block content={e} />
		{/if}
	{/each}
</p>
