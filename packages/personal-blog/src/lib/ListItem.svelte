<script lang="ts">
	import type { ListItem } from 'mdast';
	import Block from './Block.svelte';
	export let content: ListItem;
</script>

<li>
	{#each content.children as e}
		<Block content={e} />
	{/each}
</li>
