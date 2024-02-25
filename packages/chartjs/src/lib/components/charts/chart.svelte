<script lang="ts" context="module">
  import { writable } from 'svelte/store';
  import type { ChartConfiguration, ChartDataset, ChartOptions, DefaultDataPoint,  } from 'chart.js';
  import { CHART_JS_CONTEXT } from '$lib/const.js';
  import type { ChartType, UpdateMode } from 'chart.js';
	import { setContext } from 'svelte';
  import { chartAction } from '$lib/actions/chart.js';

</script>

<script lang="ts" generics="TType extends ChartType = ChartType, TData = DefaultDataPoint<TType>, TLabel= unknown ">
  export let type: TType;
  export let datasets: ChartDataset<TType, TData>[];
  export let updateMode: UpdateMode = "none";
  export let options: ChartOptions<TType>;
  export let responsive: boolean = false;
  $: options = { ...options, responsive, maintainAspectRatio: !responsive};

  const chartConfig = writable<ChartConfiguration<TType, TData, TLabel>>({
    type,
    data: {
      datasets
    },
    options
  });

  setContext(CHART_JS_CONTEXT, chartConfig);
  
</script>
<div>
  <canvas use:chartAction={{
    config: $chartConfig,
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

