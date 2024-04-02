<script lang="ts">
	let { ...props } = $props();
</script>

<div>
	<label><slot /></label>
	<input {...props} />
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		color: var(--input-text-color);
	}

	input, label {
		all: unset;
		padding: var(--input-spacing-x) var(--input-spacing-y);
		border: 1px solid var(--border-color-light);
		background: var(--content-background-color);
	}

	label {
		background-color: var(--input-label-background-color);
	}

	:first-child {
		border-top-left-radius: var(--border-radius);
		border-bottom-left-radius: var(--border-radius);
	}

	:last-child {
		border-top-right-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
	}
</style>