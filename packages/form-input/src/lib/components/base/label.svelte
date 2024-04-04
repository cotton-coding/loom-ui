<script lang="ts">
	type LabelProps = {
		for: string;
	};

	let { for: id }: LabelProps = $props();
</script>

<label class="group-element label" for={id}><slot></slot></label>

<style>
	@import './input.css';
	label {
		all: unset;
		padding: var(--input-spacing-x) var(--input-spacing-y);
		background-color: var(--input-label-background-color);
	}



</style>