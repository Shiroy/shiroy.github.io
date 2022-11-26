<script lang="ts">
	import 'highlight.js/styles/github.css';
	import { onMount } from 'svelte';
	import type { HLJSApi } from 'highlight.js';
	import type { Code } from 'mdast';

	export let content: Code;

	let highlightedCode = content.value;
	let hljs: HLJSApi | null = null;

	onMount(async () => {
		hljs = await (await import('highlight.js/lib/common')).default;
	});

	$: {
		if (hljs) {
			highlightedCode = hljs.highlightAuto(
				content.value,
				content.lang ? [content.lang] : undefined
			).value;
		} else {
			highlightedCode = content.value;
		}
	}
</script>

<pre class="overflow-x-auto max-w-full mb-4 border p-2"><code>{@html highlightedCode}</code></pre>

<style>
	pre code {
		white-space: pre;
	}
</style>
