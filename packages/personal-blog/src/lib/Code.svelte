<script lang="ts">
	import 'highlight.js/styles/github.css';
	import { onMount } from 'svelte';
	import type { HLJSApi } from 'highlight.js';

	export let language: string | undefined = undefined;
	export let code: string;

	let highlightedCode = code;
	let hljs: HLJSApi | null = null;

	onMount(async () => {
		hljs = await (await import('highlight.js/lib/common')).default;
	});

	$: {
		if (hljs) {
			highlightedCode = hljs.highlightAuto(code, language ? [language] : undefined).value;
		} else {
			highlightedCode = code;
		}
	}
</script>

<pre class="overflow-x-auto max-w-full mb-4 border p-2"><code>{@html highlightedCode}</code></pre>

<style>
	pre code {
		white-space: pre;
	}
</style>
