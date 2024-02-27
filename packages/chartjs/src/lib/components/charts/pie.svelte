<script lang="ts">

  import { Chart, ArcElement, PieController } from 'chart.js';
  import type { ChartData, UpdateMode, ChartOptions, Plugin } from 'chart.js';
  import BaseChart from './chart.svelte';
  

  const type= 'pie' as const;
  export let updateMode: UpdateMode = "none";
  export let data: ChartData<typeof type>;
  export let options: ChartOptions<typeof type> = {};
  export let plugins: Plugin<typeof type>[] = [];

  Chart.register(PieController, ArcElement);

</script>

<BaseChart {type} {data} {options} {updateMode} {plugins} {...$$restProps} >
  <slot />
</BaseChart>