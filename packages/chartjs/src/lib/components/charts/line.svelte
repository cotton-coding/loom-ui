<script lang="ts" context="module">
  import { Chart, LineController} from 'chart.js';
  import type { ChartData, UpdateMode, ChartOptions } from 'chart.js';
  import BaseChart from './chart.svelte';
  
  Chart.register(LineController);
</script>

<script lang="ts">

  const type= 'line' as const;
  export let updateMode: UpdateMode = "none";
  export let data: ChartData<typeof type>;
  export let options: ChartOptions<typeof type> = {};

</script>

<BaseChart {type} {updateMode} {data} {options} {...$$restProps}>
    <slot />
</BaseChart>