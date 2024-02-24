<script lang="ts" context="module">
  import { Chart, Legend, type ChartConfiguration, type ChartItem, type LegendItem, type LegendElement, type ChartEvent, type ChartTypeRegistry } from 'chart.js';
  import { CHART_JS_CONTEXT } from '$lib/const.js';
  import { createEventDispatcher } from 'svelte';
  import { getContext, hasContext } from 'svelte';
	import type { Writable } from 'svelte/store';

  Chart.register(Legend);

</script>

<script lang="ts">
  const dispatcher = createEventDispatcher<EventTypes>();

  export let labels: Array<string>
  export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';

  const chartStore = getContext<Writable<ChartConfiguration>>(CHART_JS_CONTEXT);

  function updateLabels(labels: Array<string>) {
    chartStore.update((chartData) => {
      return {
        ...chartData,
        data: {
          ...chartData.data || {},
          labels
        }
    }}); 
  }

  type LegendEventData = {
    event: ChartEvent;
    item: LegendItem;
    legend: LegendElement<keyof ChartTypeRegistry>;
  }

  interface EventTypes {
    hover: LegendEventData;
    leave: LegendEventData;
  }

  const createEventHandler = (eventName: keyof EventTypes) => (event: ChartEvent, item: LegendItem, legend: LegendElement<keyof ChartTypeRegistry>) => {
    dispatcher(eventName, { event, item, legend });
  }

  function updatePosition(pos: typeof position) {
    if ( !hasContext(CHART_JS_CONTEXT) ) {
      return;
    }
    chartStore.update((chartData) => {
      return {
        ...chartData,
        options: {
          ...chartData.options || {},
          plugins: {
            legend: {
              position: pos,
              onLeave: createEventHandler('leave'),
              onHover: createEventHandler('hover')
            }
          }
        }
      }
    });
  }

  $: updateLabels(labels);
  $: updatePosition(position);

</script>

