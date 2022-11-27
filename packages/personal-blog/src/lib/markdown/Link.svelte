<script lang="ts">
	import type { Link } from 'mdast';
	import Phrase from './Phrase.svelte';
	export let content: Link;
</script>

<a href={content.url} class="text-blue-600 hover:underline">
	{#each content.children as e}
		<Phrase content={e} />
	{/each}
</a>
