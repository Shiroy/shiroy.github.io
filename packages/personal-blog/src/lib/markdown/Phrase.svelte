<script lang="ts">
	import type { PhrasingContent } from 'mdast';
	import Delete from './Delete.svelte';
	import Emphasis from './Emphasis.svelte';
	import Image from './Image.svelte';
	import InlineCode from './InlineCode.svelte';
	import Link from './Link.svelte';
	import Strong from './Strong.svelte';
	export let content: PhrasingContent;
</script>

{#if content.type === 'text'}
	{content.value}
{:else if content.type === 'image'}
	<Image file={content.url} alt={content.alt ?? ''} slug="test-article" />
{:else if content.type === 'inlineCode'}
	<InlineCode {content} />
{:else if content.type === 'strong'}
	<Strong {content} />
{:else if content.type === 'link'}
	<Link {content} />
{:else if content.type === 'emphasis'}
	<Emphasis {content} />
{:else if content.type === 'break'}
	<br />
{:else if content.type === 'delete'}
	<Delete {content} />
{/if}
