<script lang="ts">
	import type { Table, TableRow as TableRowAST } from 'mdast';
	import { setContext } from 'svelte';
	import TableRow from './TableRow.svelte';
	import { tableAlignment } from './symbols';
	export let content: Table;

	setContext(tableAlignment, content.align);

	let thead: TableRowAST | null = null;
	let tbody: TableRowAST[] = [];
	$: {
		if (content.children.length > 0) {
			[thead, ...tbody] = content.children;
		} else {
			tbody = content.children;
		}
		console.log(thead);
		console.log(tbody);
	}
</script>

<table class="table-auto mb-4 border border-collapse">
	{#if thead}
		<thead>
			<TableRow content={thead} isHeader={true} />
		</thead>
	{/if}
	<tbody>
		{#each tbody as row}
			<TableRow content={row} isHeader={false} />
		{/each}
	</tbody>
</table>
