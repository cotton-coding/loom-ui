<script lang="ts" context="module">
	import type { _DeepPartialObject } from '$lib/definitions.js';
  import { Chart, Legend, type ChartConfiguration, type LegendOptions, type LegendItem, type LegendElement, type ChartEvent, type ChartTypeRegistry, type LayoutPosition } from 'chart.js';
  import { CONTEXT_CHART, type chartContextData } from '$lib/definitions.js';
  import { createEventDispatcher, onMount } from 'svelte';
  import { getContext, hasContext } from 'svelte';

  Chart.register(Legend);


</script>

<script lang="ts">
  const dispatcher = createEventDispatcher<EventTypes>();

  export let title: string | undefined = undefined;
  export let display: boolean = true;
  export let labels: Array<string>
  export let position: LayoutPosition = 'top';

  const { data, options } = getContext<chartContextData>(CONTEXT_CHART);

  function updateLabels(labels: Array<string>) {
    data.update((chartData) => {
      return {
        ...chartData,
        labels
      }
    }); 
  }

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

  onMount(() => {
    updateLegendPlugin({
      onClick: createEventHandler('click'),
      onLeave: createEventHandler('leave'),
      onHover: createEventHandler('hover')
    })
  });

  const createEventHandler = (eventName: keyof EventTypes) => (event: ChartEvent, item: LegendItem, legend: LegendElement<keyof ChartTypeRegistry>) => {
    dispatcher(eventName, { event, item, legend });
  }

  function updateLegendPlugin(legend: _DeepPartialObject<LegendOptions<keyof ChartTypeRegistry>>) {
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

  function updatePosition(pos: typeof position) {
    updateLegendPlugin({ position: pos });
  }

  function updateTitle(title: string | undefined) {
    if(title) {
      updateLegendPlugin({ title: { text: title, display: true } });
    } else {
      updateLegendPlugin({ title: undefined });
    }
  }

  function updateDisplay(display: boolean) {
    updateLegendPlugin({ display });
  }
  
  $: hasContext(CONTEXT_CHART) && updateDisplay(display);
  $: hasContext(CONTEXT_CHART) && updateTitle(title);
  $: hasContext(CONTEXT_CHART) && updateLabels(labels);
  $: hasContext(CONTEXT_CHART) && updatePosition(position);

</script>

