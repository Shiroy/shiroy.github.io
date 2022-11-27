<script lang="ts">
	import type { InlineCode } from 'mdast';
	export let content: InlineCode;
</script>

<span class="font-mono bg-slate-200 p-1">{content.value}</span>
