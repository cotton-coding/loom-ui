<script lang="ts" context="module">
  import { Chart, ArcElement, PieController } from 'chart.js';
  import type { ChartData, UpdateMode, ChartOptions } from 'chart.js';
  import BaseChart from './chart.svelte';
  
  Chart.register(PieController, ArcElement);
</script>

<script lang="ts">

  const type= 'pie' as const;
  export let updateMode: UpdateMode = "none";
  export let data: ChartData<typeof type>;
  export let options: ChartOptions<typeof type> = {};

</script>

<BaseChart {type} {data} {options} {updateMode} {...$$restProps} >
  <slot />
</BaseChart>