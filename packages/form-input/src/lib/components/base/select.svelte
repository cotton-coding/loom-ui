<script lang="ts">
	type DropdownProps = {
		id: string;
		label: string;
		options: string[];
	};

	let { id, label, options }: DropdownProps = $props();

</script>

<select {id} class="group-element">
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>

<style>

	@import './input.css';
	select {
		all: unset;
		padding: var(--input-spacing-x) var(--input-spacing-y);
		background-color: var(--input-label-background-color);
		background-image: url("../../icons/arrow-down-s-line.svg");
		background-position: right var(--input-spacing-y) center;
		background-repeat: no-repeat;
  	background-size: 1rem;
		padding-right: calc(var(--input-spacing-y) + 1.25rem);
		overflow: hidden;
	}

	select:hover,
	select:active,
	select:focus {
		--brightness: calc(1 - var(--input-brightness-factor));
		filter: brightness(var(--brightness, 0.95));
	}
</style>