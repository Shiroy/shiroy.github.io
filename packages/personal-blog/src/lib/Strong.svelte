<script lang="ts">
	import type { Strong } from 'mdast';
	import Phrase from './Phrase.svelte';
	export let content: Strong;
</script>

<span class="font-bold">
	{#each content.children as e}
		<Phrase content={e} />
	{/each}
</span>
