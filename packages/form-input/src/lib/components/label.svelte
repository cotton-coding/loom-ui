<script lang="ts">
	type LabelProps = {
		for: string;
	};

	let { for: id }: LabelProps = $props();
</script>

<label for={id}><slot></slot></label>

<style>
	label {
		all: unset;
		padding: var(--input-spacing-x) var(--input-spacing-y);
		border: 1px solid var(--input-border-color);
		border-left: none;
		background-color: var(--input-label-background-color);
	}

	:global(.input-group):focus-within label {
		background-color: var(--input-border-color-focus, var(--primary-color));
		border-color: var(--input-border-color-focus, var(--primary-color));
		color: var(--input-label-text-color-focus);
	}

	label:first-child {
		border-top-left-radius: var(--border-radius);
		border-bottom-left-radius: var(--border-radius);
		border-left: 1px solid var(--input-border-color);
	}

	label:last-child {
		border-top-right-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
	}
</style>