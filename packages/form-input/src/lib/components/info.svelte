<script lang="ts">

</script>

<span><slot></slot></span>

<style>
	span {
		all: unset;
		padding: var(--input-spacing-x) var(--input-spacing-y);
		border: 1px solid var(--input-border-color);
		border-left: none;
		background-color: var(--input-label-background-color);
	}

	:global(.input-group):focus-within span {
		border-color: var(--input-border-color-focus, var(--primary-color));
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