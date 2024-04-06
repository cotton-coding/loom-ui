<script lang="ts">
	import { getRandomString } from '$lib/utils/random.js';

	type InputProps = {
		id?: string;
		name?: string;
		checked?: boolean;
		radio: boolean;
		value?: string;
		ontoggle?: (isChecked: boolean) => void;
	} & HTMLInputElement['attributes'];

	const getRandomId = (pre: string | undefined) => pre ? `toggle-button-${pre}-${getRandomString()}`: `toggle-button-${getRandomString()}`;

	let {
		name,
		id = getRandomId(name),
		checked = $bindable(false),
		radio = false,
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
	<input {id} type={radio ? 'radio' : 'checkbox'} {onchange} {name} {...props}/>
		<label for={id}>
			<slot {checked}>
			</slot>
		</label>
</div>


<style>
	@import './input.css';

	.group-element {
		--border-y: var(--border-y, var(--input-border));
		--background-color: var(--toggle-background-color, var(--input-label-background-color));
		--color: var(--toggle-color, var(--label-text-color));
		--selected-background-color: var(--toggle-selected-background-color);
		--selected-color: var(--toggle-selected-color);
	}

	.group-element {
		display: flex;
		flex-direction: row;
		overflow: hidden;
	}

	input {
		position: absolute;
		display: none;
		top: 0;
		left: 0;
		height: 0;
		width: 0;

	}

	label {
		color: var(--color);
		padding: var(--input-spacing-x) var(--input-spacing-y);
		background-color: var(--background-color);
		cursor: pointer;
	}

	label > :global(svg) {
		display: inline;
	}

	input:checked + label {
		color: var(--selected-color);
		background-color: var(--selected-background-color);
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