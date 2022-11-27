<script lang="ts">
	import type { TableCell, AlignType } from 'mdast';
	import { getContext } from 'svelte';
	import Phrase from './Phrase.svelte';
	import { tableAlignment } from './tableSymbol';
	export let content: TableCell;
	export let isHeader = false;
	export let colNumber: number;
	const alignment = getContext<AlignType[] | null | undefined>(tableAlignment);
	$: align = alignment ? (alignment[colNumber] ? alignment[colNumber] : 'left') : 'left';
</script>

{#if isHeader}
	<th
		class="border p-2"
		class:text-left={align === 'left'}
		class:text-center={align === 'center'}
		class:text-right={align === 'right'}
	>
		{#each content.children as e}
			<Phrase content={e} />
		{/each}
	</th>
{:else}
	<td
		class="border p-2"
		class:text-left={align === 'left'}
		class:text-center={align === 'center'}
		class:text-right={align === 'right'}
	>
		{#each content.children as e}
			<Phrase content={e} />
		{/each}
	</td>
{/if}
