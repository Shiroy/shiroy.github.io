<script lang="ts">
	import type { List } from 'mdast';
	import ListItem from './ListItem.svelte';
	export let content: List;
</script>

{#if content.ordered}
	<ol start={content.start} class="list-decimal list-outside mb-4 ml-8">
		{#each content.children as e}
			<ListItem content={e} />
		{/each}
	</ol>
{:else}
	<ul class="list-disc list-outside mb-4 ml-8">
		{#each content.children as e}
			<ListItem content={e} />
		{/each}
	</ul>
{/if}
