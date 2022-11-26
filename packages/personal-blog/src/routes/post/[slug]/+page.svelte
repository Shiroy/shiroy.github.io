<script lang="ts">
	import Article from '$lib/Article.svelte';
	import Markdown from '$lib/Markdown.svelte';
	import Title from '$lib/Title.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.title}</title>
	<meta name="author" content={data.author} />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<Article>
	<Title slot="title">
		<svelte:fragment slot="title">{data.title}</svelte:fragment>
		<svelte:fragment slot="author">{data.author}</svelte:fragment>
	</Title>

	<Markdown content={data.content} />
</Article>
