<script lang="ts">
	import type { BlockContent } from 'mdast';
	import Paragraph from '$lib/Paragraph.svelte';
	import Code from './Code.svelte';
	import Blockquote from './Blockquote.svelte';
	import HorizontalLine from './HorizontalLine.svelte';
	import Heading from './Heading.svelte';

	export let content: BlockContent;
</script>

{#if content.type === 'paragraph'}
	<Paragraph content={content.children} />
{:else if content.type === 'code'}
	<Code {content} />
{:else if content.type === 'blockquote'}
	<Blockquote {content} />
{:else if content.type === 'thematicBreak'}
	<HorizontalLine />
{:else if content.type === 'heading'}
	<Heading {content} />
{/if}
