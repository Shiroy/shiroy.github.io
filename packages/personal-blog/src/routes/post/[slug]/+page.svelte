<script lang="ts">
	import Article from '$lib/Article.svelte';
	import Title from '$lib/Title.svelte';
	import type { PageData } from './$types';
	import Node from './Node.svelte';

	export let data: PageData;
</script>

<Article>
	<Title slot="title">{data.title}</Title>

	{#each data.content as token}
		<Node {token} slug={data.slug} />
	{/each}
</Article>
