<script lang="ts">

  import { Chart, ArcElement, DoughnutController } from 'chart.js';
  import type { ChartData, UpdateMode, ChartOptions, Plugin } from 'chart.js';
  import BaseChart from './chart.svelte';

  const type= 'doughnut' as const;
  export let updateMode: UpdateMode = "none";
  export let data: ChartData<typeof type>;
  export let options: ChartOptions<typeof type> = {};
  export let plugins: Plugin<typeof type>[] = [];

  Chart.register(DoughnutController, ArcElement);
  
</script>

<BaseChart {type} {data} {options} {updateMode} {plugins} {...$$restProps} >
  <slot />
</BaseChart>