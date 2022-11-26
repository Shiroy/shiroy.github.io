<script lang="ts">
	import type { Delete } from 'mdast';
	export let content: Delete;
	import Phrase from './Phrase.svelte';
</script>

<span class="line-through">
	{#each content.children as e}
		<Phrase content={e} />
	{/each}
</span>
