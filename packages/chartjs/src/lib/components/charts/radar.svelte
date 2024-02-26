<script lang="ts" context="module">
  import { Chart, RadarController } from 'chart.js';
  import type { ChartData, UpdateMode, ChartOptions } from 'chart.js';
  import BaseChart from './chart.svelte';
  
  Chart.register(RadarController);
</script>

<script lang="ts">

  const type= 'radar' as const;
  export let updateMode: UpdateMode = "none";
  export let data: ChartData<typeof type>;
  export let options: ChartOptions<typeof type> = {};

</script>

<BaseChart {type} {data} {options} {updateMode} {...$$restProps} >
  <slot />
</BaseChart>