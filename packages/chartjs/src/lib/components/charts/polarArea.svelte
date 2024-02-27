<script lang="ts">

  import { Chart, PolarAreaController, RadialLinearScale } from 'chart.js';
  import type { ChartData, UpdateMode, ChartOptions, Plugin } from 'chart.js';
  import BaseChart from './chart.svelte';

  const type= 'polarArea' as const;
  export let updateMode: UpdateMode = "none";
  export let data: ChartData<typeof type>;
  export let options: ChartOptions<typeof type> = {};
  export let plugins: Plugin<typeof type>[] = [];

  Chart.register(PolarAreaController, RadialLinearScale);

</script>

<BaseChart {type} {data} {options} {updateMode} {plugins} {...$$restProps} >
  <slot />
</BaseChart>