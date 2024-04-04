<script lang="ts">
	import ErrorIcon from '$lib/icons/error-warning-fill.svg?raw';
	import CheckIcon from '$lib/icons/check-line.svg?raw';

	type InputProps = {
		status?: 'invalid' | 'valid';
		[key: string]: unknown;
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
<input class="group-element" {...props} />
{:else}
<div class="group-element {status}">
	<input {...props} />
	{@html getIcon()}
</div>
{/if}

<style>

	@import './input.css';

	div {
		position: relative;
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

	.group-element {
		position: relative;
		background: var(--content-background-color);
	}

	input {
		all: unset;
		padding: var(--input-spacing-x) var(--input-spacing-y);
	}
</style>