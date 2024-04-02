<script lang="ts">
	type LabelProps = {
		for: string;
	};

	let { for: id }: LabelProps = $props();
</script>

<span for={id}><slot></slot></span>

<style>
	span {
		all: unset;
		padding: var(--input-spacing-x) var(--input-spacing-y);
		border: 1px solid var(--input-border-color);
		border-left: none;
		background-color: var(--input-label-background-color);
	}

	span:first-child {
		border-top-left-radius: var(--border-radius);
		border-bottom-left-radius: var(--border-radius);
		border-left: 1px solid var(--input-border-color);
	}

	span:last-child {
		border-top-right-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
	}
</style>