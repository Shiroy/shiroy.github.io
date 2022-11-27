<script lang="ts">
	import type { TableRow } from 'mdast';
	import TableCell from './TableCell.svelte';
	export let content: TableRow;
	export let isHeader = false;
</script>

<tr>
	{#each content.children as e, i}
		<TableCell content={e} {isHeader} colNumber={i} />
	{/each}
</tr>
