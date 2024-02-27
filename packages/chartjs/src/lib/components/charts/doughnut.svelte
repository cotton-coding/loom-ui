<script lang="ts" context="module">
  import { Chart, ArcElement, DoughnutController } from 'chart.js';
  import type { ChartData, UpdateMode, ChartOptions, Plugin } from 'chart.js';
  import BaseChart from './chart.svelte';

</script>

<script lang="ts">

  const type= 'doughnut' as const;
  export let updateMode: UpdateMode = "none";
  export let data: ChartData<typeof type>;
  export let options: ChartOptions<typeof type> = {};
  export let plugins: Plugin<typeof type>[] = [];
  

</script>

<BaseChart {type} {data} {options} {updateMode} plugins={[...plugins, DoughnutController, ArcElement]} {...$$restProps} >
  <slot />
</BaseChart>