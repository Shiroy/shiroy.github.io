<script lang="ts">
	export let level: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
</script>

<svelte:element this={level}><slot /></svelte:element>

<style>
	h2,
	h3,
	h4,
	h5,
	h6 {
		@apply mb-6;
	}

	h2 {
		@apply text-3xl;
		@apply font-bold;
	}

	h3 {
		@apply text-2xl;
		@apply font-semibold;
	}

	h4 {
		@apply text-xl;
		@apply font-semibold;
	}

	h5 {
		@apply text-base;
		@apply font-semibold;
	}

	h6 {
		@apply text-sm;
		@apply font-semibold;
	}
</style>
