<script lang="ts">
	import { getRandomString } from "$lib/utils/random.js";

	export let name: string | null | undefined = undefined;
	export let id: string = name ? `${name}-${getRandomString()}` : getRandomString(13);
	export let value: string;
	export let type: string;


</script>

<input  {...$$restProps}>