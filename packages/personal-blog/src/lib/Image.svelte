<script lang="ts" context="module">
	function getImageJPG(slug: string, name: string) {
		return import(`./articles/${slug}/${name}.jpg`);
	}

	function getImagePNG(slug: string, name: string) {
		return import(`./lib/articles/${slug}/${name}.png`);
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	export let slug: string;
	export let file: string;
	export let alt: string = '';

	let srcset: string;

	onMount(async () => {
		if (file.endsWith('.jpg')) {
			srcset = (await getImageJPG(slug, file.slice(0, -4))).default;
		} else if (file.endsWith('.png')) {
			srcset = (await getImagePNG(slug, file.slice(0, -4))).default;
		}
	});
</script>

<img {srcset} {alt} class="max-w-full" />
