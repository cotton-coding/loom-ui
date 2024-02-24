<script lang="ts" context="module">
  import { writable } from 'svelte/store';
  import type { ChartConfiguration, ChartDataset, DefaultDataPoint,  } from 'chart.js';
  import { CHART_JS_CONTEXT } from '$lib/const.js';
  import type { ChartType, UpdateMode } from 'chart.js';
	import { setContext } from 'svelte';
  import { chartAction } from '$lib/actions/chart.js';

</script>

<script lang="ts" generics="TType extends ChartType = ChartType, TData = DefaultDataPoint<TType> ">
  export let type: TType;
  export let datasets: ChartDataset<TType>[];
  export let updateMode: UpdateMode = "none";

  const chartConfig = writable<ChartConfiguration<TType>>({
    type,
    data: {
      datasets
    }
  });

  setContext(CHART_JS_CONTEXT, chartConfig);
  
</script>

<canvas use:chartAction={{
  config: $chartConfig,
  updateMode
}}>
  <slot />
</canvas>

