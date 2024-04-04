<script lang="ts">
	import { getRandomString } from '$lib/utils/random.js';

	type InputProps = {
		id?: string;
		name?: string;
		checked?: boolean;
		ontoggle?: (isChecked: boolean) => void;
	} & HTMLInputElement['attributes'];

	const getRandomId = (pre: string | undefined) => pre ? `toggle-button-${pre}-${getRandomString()}`: `toggle-button-${getRandomString()}`;

	let {
		name,
		id = getRandomId(name),
		checked = $bindable(false),
		ontoggle = () => {},
		...props
	}: InputProps = $props();

	function onchange(event: Event) {
		const target = event.target as HTMLInputElement;
		checked = target.checked;
		ontoggle(checked);
	}

</script>

<div class="group-element">
	<input {id} type="checkbox" {onchange} {...props}/>
		<label for={id}>
			<slot {checked}>
			</slot>
		</label>
</div>


<style>
	@import './input.css';

	.group-element {
		display: flex;
		flex-direction: row;
		overflow: hidden;
	}

	input {
		all: unset;
		position: absolute;
		display: none;
		top: 0;
		left: 0;
		height: 0;
		width: 0;

	}

	label {
		all: unset;
		padding: var(--input-spacing-x) var(--input-spacing-y);
		background-color: var(--input-label-background-color);
	}

	label > :global(svg) {
		display: inline;
	}

	input:checked + label {
		color: var(--toggle-selected-color);
		background-color: var(--toggle-selected-background-color);
	}

	label:hover,
	label:active,
	label:focus {
		--brightness: calc(1 - var(--input-brightness-factor));
		filter: brightness(var(--brightness, 0.95));
	}

	input:checked + label:hover,
	input:checked + label:active,
	input:checked + label:focus {
		--brightness: calc(1 + var(--input-brightness-factor));
		filter: brightness(var(--brightness, 1.05));
	}


</style>