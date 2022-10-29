<script lang="ts">
	import Article from '$lib/Article.svelte';
	import Title from '$lib/Title.svelte';
	import type { PageData } from './$types';
	import Node from './Node.svelte';

	export let data: PageData;
</script>

<Article>
	<Title slot="title">This is a very very very long title</Title>

	{#each data.content as token}
		<Node {token} />
	{/each}
</Article>
