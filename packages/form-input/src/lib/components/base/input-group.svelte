<script lang="ts">
	import { getRandomString } from '$lib/utils/random.js';
	import { setContext } from 'svelte';

	type InputGroupProps = {
		note?: string;
		status?: string;
	};

	setContext('input-group', {});

	const id: string = getRandomString(21);
	let { note, status = "", ...props }: InputGroupProps = $props();

	function setClassAction(node: HTMLElement) {

		const getFirstElement = (node: HTMLElement) => {
			const list = node.querySelectorAll('.group-element');
			return list[0];
		}
		const getLastElement = (node: HTMLElement) => {
			const list = node.querySelectorAll('.group-element');
			return list[list.length - 1];
		}
		const addClass = (element: Element, value: string) => {
			const attr = element.getAttribute('class');
			element.setAttribute('class', `${attr} ${value}`);
		}


		const firstElement = getFirstElement(node);
		if(firstElement) {
			addClass(firstElement, 'first-element');
		}
		const lastElement = getLastElement(node);
		if(lastElement) {
			addClass(lastElement, 'last-element');
		}


	}

</script>

<div class="input-group" class:has-note={note}>
	<div class="inputs {status}" use:setClassAction>
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

	div.inputs > :global(:first-child) {
	border-top-left-radius: var(--border-radius);
	border-bottom-left-radius: var(--border-radius);
	border-left: var(--input-border-size) solid var(--input-border-color);
}

div.inputs > :global(:last-child) {
	border-top-right-radius: var(--border-radius);
	border-bottom-right-radius: var(--border-radius);
	border-right: var(--input-border-size) solid var(--input-border-color);
}
</style>
