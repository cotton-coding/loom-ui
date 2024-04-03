<script lang="ts">
	type DropdownProps = {
		id: string;
		label: string;
		options: string[];
	};

	let { id, label, options }: DropdownProps = $props();

</script>

<select {id}>
	{#each options as option}
		<option value={option}>{option}</option>
	{/each}
</select>

<style>


	select {
		all: unset;
		padding: var(--input-spacing-x) var(--input-spacing-y);
		border: 1px solid var(--input-border-color);
		border-right: none;
		background-color: var(--input-label-background-color);
		background-image: url("../icons/arrow-down-s-line.svg");
		background-position: right var(--input-spacing-y) center;
		background-repeat: no-repeat;
  	background-size: 1rem;
		padding-right: calc(var(--input-spacing-y) + 1.25rem);
	}

	:global(.input-group):focus-within select {
		border-color: var(--input-border-color-focus, var(--primary-color));
	}

	select:first-child {
		border-top-left-radius: var(--border-radius);
		border-bottom-left-radius: var(--border-radius);
		border-left: 1px solid var(--input-border-color);
	}

	select:last-child {
		border-top-right-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
	}
</style>