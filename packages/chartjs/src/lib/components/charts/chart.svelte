<script lang="ts" context="module">
	import { CONTEXT_CHART, type chartContextData } from '$lib/definitions.js';
  import { writable } from 'svelte/store';
  import type { ChartData, ChartDataset, ChartOptions, DefaultDataPoint,  } from 'chart.js';
  import type { ChartType, UpdateMode } from 'chart.js';
	import { setContext } from 'svelte';
  import { chartAction } from '$lib/actions/chart.js';

</script>

<script lang="ts" generics="TType extends ChartType = ChartType, TData = DefaultDataPoint<TType>, TLabel= unknown ">
  export let type: TType;
  export let data: ChartData<TType, TData, TLabel>;
  export let updateMode: UpdateMode = "none";
  export let options: ChartOptions<TType>;
  export let responsive: boolean = false;
  $: options = { ...options, responsive, maintainAspectRatio: !responsive};

  const dataStore = writable<ChartData<TType, TData, TLabel>>(data);

  const optionStore = writable<ChartOptions<TType>>(options);

  setContext<chartContextData<TType, TData, TLabel>>(CONTEXT_CHART, {
    type,
    data: dataStore,
    options: optionStore
  });
  
</script>
<div>
  <canvas use:chartAction={{
    config: {
      type,
      data: $dataStore,
      options: $optionStore
    },
    updateMode
  }}>
    <slot />
  </canvas>
</div>

<style>
  div {
    position: relative;
    margin: auto;
    width: var(--chart-width, 100%);
    height: var(--chart-height, 100%);
  }
</style>

