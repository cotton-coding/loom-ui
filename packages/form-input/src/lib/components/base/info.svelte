<script lang="ts">

</script>

<span class="group-element"><slot></slot></span>

<style>

	@import './input.css';
	span {
		all: unset;
		padding: var(--input-spacing-x) var(--input-spacing-y);
		background-color: var(--input-label-background-color);
	}

</style>