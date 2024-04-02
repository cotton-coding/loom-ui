<script lang="ts">
	import ErrorIcon from '$lib/icons/error-warning-fill.svg?raw';
	import CheckIcon from '$lib/icons/check-line.svg?raw';

	type InputProps = {
		status?: 'invalid' | 'valid';
	};

	let { status, ...props }: InputProps = $props();

	function getIcon() {
		if (status === 'invalid') {
			return ErrorIcon;
		} else if (status === 'valid') {
			return CheckIcon;
		}
	}
</script>

{#if status == null}
<input class="input-element" {...props} />
{:else}
<div class="input-element {status}">
	<input {...props} />
	{@html getIcon()}
</div>
{/if}

<style>
	div {
		position: relative;
	}


	:global(.input-group):focus-within .input-element {
		border-color: var(--input-border-color-focus, var(--primary-color));
	}

	div > :global(svg) {
		position: absolute;
		top: 0;
		right: 0;
		margin: var(--input-spacing-x) var(--input-spacing-y);
		height: 1rem;
	}

	div.invalid > :global(svg) {
		color: var(--danger-color);
	}

	div.valid > :global(svg) {
		color: var(--success-color);
	}

	.input-element {
		position: relative;

		border: 1px solid var(--input-border-color);
		border-left: none;
		background: var(--content-background-color);
	}

	input {
		all: unset;
		padding: var(--input-spacing-x) var(--input-spacing-y);
	}

	.input-element:first-child {
		border-top-left-radius: var(--border-radius);
		border-bottom-left-radius: var(--border-radius);
		border-left: 1px solid var(--input-border-color);
	}

	.input-element:last-child {
		border-top-right-radius: var(--border-radius);
		border-bottom-right-radius: var(--border-radius);
	}
</style>