<script lang="ts">
	import type { marked } from 'marked';
	import Paragraph from '$lib/Paragraph.svelte';
	import Subtitle from '$lib/Subtitle.svelte';
	import Code from '$lib/Code.svelte';
	import Blockquote from '$lib/Blockquote.svelte';
	import Image from '$lib/Image.svelte';

	export let token: marked.Token;
	export let slug: string;
</script>

{#if token.type === 'heading'}
	<Subtitle level={token.depth}>
		{#each token.tokens as t}
			<svelte:self token={t} {slug} />
		{/each}
	</Subtitle>
{:else if token.type === 'paragraph'}
	<Paragraph>
		{#each token.tokens as t}
			<svelte:self token={t} {slug} />
		{/each}
	</Paragraph>
{:else if token.type === 'text'}
	{#if token.tokens !== undefined}
		{#each token.tokens as t}
			<svelte:self token={t} {slug} />
		{/each}
	{:else}
		{@html token.text}
	{/if}
{:else if token.type === 'code'}
	<Code code={token.text} language={token.lang} />
{:else if token.type === 'link'}
	<a href={token.href} class="text-blue-600 hover:underline">
		{#each token.tokens as t}
			<svelte:self token={t} {slug} />
		{/each}
	</a>
{:else if token.type === 'strong'}
	<span class="font-bold">
		{#each token.tokens as t}
			<svelte:self token={t} {slug} />
		{/each}
	</span>
{:else if token.type === 'codespan'}
	<span class="font-mono bg-slate-200 p-1">{token.text}</span>
{:else if token.type === 'blockquote'}
	<Blockquote>
		{#each token.tokens as t}
			<svelte:self token={t} {slug} />
		{/each}
	</Blockquote>
{:else if token.type === 'br'}
	<br />
{:else if token.type === 'hr'}
	<div class="border-b-2 w-full my-6" />
{:else if token.type === 'image'}
	<Image file={token.href} alt={token.text} {slug} />
{:else if token.type === 'list'}
	{#if token.ordered}
		<ol class="list-decimal ml-8 mb-4">
			{#each token.items as e}
				<li>
					{#each e.tokens as t}
						<svelte:self token={t} {slug} />
					{/each}
				</li>
			{/each}
		</ol>
	{:else}
		<ul class="list-disc ml-8 mb-4">
			{#each token.items as e}
				<li>
					{#each e.tokens as t}
						<svelte:self token={t} {slug} />
					{/each}
				</li>
			{/each}
		</ul>
	{/if}
{:else if token.type === 'table'}
	<table class="table-auto mb-4 border border-collapse">
		<thead>
			<tr>
				{#each token.header as header}
					<th class="border p-2">
						{#each header.tokens as t}
							<svelte:self token={t} {slug} />
						{/each}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each token.rows as row}
				<tr>
					{#each row as cell}
						<td class="border p-2">
							{#each cell.tokens as t}
								<svelte:self token={t} {slug} />
							{/each}
						</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
{:else if token.type === 'em'}
	<span class="italic">
		{#each token.tokens as t}
			<svelte:self token={t} {slug} />
		{/each}
	</span>
{/if}
