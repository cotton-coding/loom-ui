<script lang="ts">
	import { type _DeepPartialObject } from '$lib/definitions.js';
	import { CONTEXT_CHART, type chartContextData } from '$lib/definitions.js';
	import { type TitleOptions, Title, Chart } from 'chart.js';
	import { afterUpdate, getContext, hasContext, onMount } from 'svelte';

	export let text: string;
	export let display: boolean = true;
	export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';
	
	$: otherProps = $$restProps as TitleOptions;

	const { options, plugins } = getContext<chartContextData>(CONTEXT_CHART);

	

	onMount(() => {
		plugins.update((chartPlugins) => {
			return [...chartPlugins, Title]
		});
	});

	afterUpdate(() => {
		updateTitlePlugin({ ...otherProps, text, display, position });
	});


	function updateTitlePlugin(props: _DeepPartialObject<TitleOptions>) {
		console.log('updateTitlePlugin', props);
		options.update((chartOptions) => {
			return {
				...chartOptions,
				plugins: {
					...chartOptions.plugins,
					title: {
						...chartOptions.plugins?.title || {},
						...props,
					}
				}
			};
		});
	}

</script>