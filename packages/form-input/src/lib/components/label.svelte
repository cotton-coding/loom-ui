<script lang="ts">
	type LabelProps = {
		for: string;
	};

	let { for: id }: LabelProps = $props();
</script>

<label class="group-element" for={id}><slot></slot></label>

<style>
	@import './input.css';
	label {
		all: unset;
		padding: var(--input-spacing-x) var(--input-spacing-y);
		border: 1px solid var(--input-border-color);
		border-left: none;
		background-color: var(--input-label-background-color);
	}



</style>