<script lang="ts" context="module">
	import type { _DeepPartialObject } from '$lib/definitions.js';
  import { Legend, type LegendOptions, type LegendItem, type LegendElement, type ChartEvent, type ChartTypeRegistry, type LayoutPosition } from 'chart.js';
  import { CONTEXT_CHART, type chartContextData } from '$lib/definitions.js';
  import { createEventDispatcher, onMount } from 'svelte';
  import { getContext, hasContext } from 'svelte';

  type LegendEventData = {
    event: ChartEvent;
    item: LegendItem;
    legend: LegendElement<keyof ChartTypeRegistry>;
  }
  interface EventTypes {
    hover: LegendEventData;
    leave: LegendEventData;
    click: LegendEventData;
  }

</script>

<script lang="ts">
  const dispatcher = createEventDispatcher<EventTypes>();

  export let labels: Array<string>
  export let title: string | undefined = undefined;
  export let display: boolean = true;
  export let position: LayoutPosition = 'top';
  export let bubbleEvents: boolean = false;

  const { data, options, plugins } = getContext<chartContextData>(CONTEXT_CHART);

  onMount(() => {
    plugins.update((chartPlugins) => {
      return [...chartPlugins, Legend]
    });
    if(bubbleEvents) {
      updateLegendPlugin({
        onClick: createEventHandler('click'),
        onLeave: createEventHandler('leave'),
        onHover: createEventHandler('hover')
      })
    }
    
  });

  function updateLabels(labels: Array<string>) {
    data.update((chartData) => {
      return {
        ...chartData,
        labels
      }
    }); 
  }

  const createEventHandler = (eventName: keyof EventTypes) => (event: ChartEvent, item: LegendItem, legend: LegendElement<keyof ChartTypeRegistry>) => {
    dispatcher(eventName, { event, item, legend });
  }

  function updateLegendPlugin(legend: _DeepPartialObject<LegendOptions<keyof ChartTypeRegistry>>) {
    console.log('updateLegendPlugin', legend)
    options.update((chartOptions) => {
      return {
        ...chartOptions || {},
        plugins: {
          legend: {
            ...chartOptions.plugins?.legend || {},
            ...legend
          }
        }
      }
    });
  }

  
  $: hasContext(CONTEXT_CHART) && updateLabels(labels);
  $: hasContext(CONTEXT_CHART) && updateLegendPlugin({ 
    position, display, 
    title: { text: title, display: !!title } 
  });

</script>

