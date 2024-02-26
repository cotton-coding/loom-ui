<script lang="ts">
	import { CONTEXT_CHART, type chartContextData } from '$lib/definitions.js';
	import { type TitleOptions } from 'chart.js';
	import { getContext } from 'svelte';

	export let text: string;
	export let display: boolean = true;
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';
	
	$: otherProps = $$restProps as TitleOptions;

	const { options } = getContext<chartContextData>(CONTEXT_CHART);

	function updateTitlePlugin(props: TitleOptions) {
		options.update((chartOptions) => {
			return {
				...chartOptions,
				plugins: {
					title: {
						...chartOptions.plugins?.title || {},
						...props
					}
				}
			};
		});
	}

	$: updateTitlePlugin({ ...otherProps, text, display, position });

</script>