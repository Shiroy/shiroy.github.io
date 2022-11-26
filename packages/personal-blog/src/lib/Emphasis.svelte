<script lang="ts">
	import type { Emphasis } from 'mdast';
	import Phrase from './Phrase.svelte';
	export let content: Emphasis;
</script>

<em class="italic">
	{#each content.children as e}
		<Phrase content={e} />
	{/each}
</em>
