<script lang="ts">
	import type { PhrasingContent } from 'mdast';
	import Phrase from './Phrase.svelte';
	export let content: PhrasingContent[];
</script>

<p class="mb-4 text-justify">
	{#each content as e}
		<Phrase content={e} />
	{/each}
</p>
