<script lang="ts" context="module">
  import { Chart, Legend, type ChartConfiguration, type LegendOptions, type LegendItem, type LegendElement, type ChartEvent, type ChartTypeRegistry } from 'chart.js';
  import { CHART_JS_CONTEXT } from '$lib/const.js';
  import { createEventDispatcher, onMount } from 'svelte';
  import { getContext, hasContext } from 'svelte';
	import type { Writable } from 'svelte/store';

  Chart.register(Legend);

  export type DeepPartial<T> = T extends Function
  ? T
  : T extends Array<infer U>
    ? _DeepPartialArray<U>
    : T extends object
      ? _DeepPartialObject<T>
      : T | undefined;

  type _DeepPartialArray<T> = Array<DeepPartial<T>>
  type _DeepPartialObject<T> = { [P in keyof T]?: DeepPartial<T[P]> };

</script>

<script lang="ts">
  const dispatcher = createEventDispatcher<EventTypes>();

  export let title: string | undefined = undefined;
  export let display: boolean = true;
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
    chartStore.update((chartData) => {
      return {
        ...chartData,
        options: {
          ...chartData.options || {},
          plugins: {
            legend: {
              ...chartData.options?.plugins?.legend || {},
              ...legend
            }
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

  $: hasContext(CHART_JS_CONTEXT) && updateDisplay(display);
  $: hasContext(CHART_JS_CONTEXT) && updateTitle(title);
  $: hasContext(CHART_JS_CONTEXT) && updateLabels(labels);
  $: hasContext(CHART_JS_CONTEXT) && updatePosition(position);

</script>

