<script lang="ts">
	import { getRandomString } from '$lib/utils/random.js';
	import { setContext } from 'svelte';

	setContext('input-group', {});

	const id: string = getRandomString(21);
	let { note, status, ...props } = $props();
</script>

<div class="input-group" class:has-note={note}>
	<div class="inputs {status}">
		<slot {id}></slot>
	</div>
	{#if note}<small>{note}</small>{/if}
</div>

<style>
	div.input-group {
		margin: var(--input-margin, 0);
		max-width: var(--input-max-width, 100%);
	}

	div.inputs {
		display: flex;
		flex-direction: row;
		color: var(--input-text-color);
	}

	div.input-group:not(.has-note) {
		margin-bottom: calc(var(--input-spacing-y) + var(--input-note-text-size));
	}

	small {
		color: var(--input-color);
		padding: 0 var(--input-spacing-y);
		font-size: var(--input-note-text-size);
	}
</style>