<script lang="ts">
	import { Input, InputGroup, Label, ToggleButton } from '$lib/index.js';
	import EyeOpen from '$lib/icons/eye-line.svg?raw';
	import EyeClose from '$lib/icons/eye-close-line.svg?raw';

	type PasswordProps = {
		label?: string;
		name?: string;
		show?: boolean;
	} & HTMLInputElement['attributes'];

	let {
		label = "Password",
		name = "password",
		show = $bindable(false),
		...props
	}: PasswordProps = $props();

</script>

<InputGroup let:id>
	{#if label}<Label for={id}>{label}</Label>{/if}
	<Input type={show ? 'text':'password'} {id} name={name}
		--border-y="0"
		{...props}
	/>
	<ToggleButton
		bind:checked={show}
		--background-color="var(--input-background-color)"
		--selected-background-color="var(--input-background-color)"
		--border-y="0"
	>
		{#if show}{@html EyeOpen}
		{:else}{@html EyeClose}
		{/if}
	</ToggleButton>
</InputGroup>

<style>
	:global(svg) {
		all: unset;
		width: 1rem;
		height: 1rem;
		fill: var(--text-color);
	}
</style>

