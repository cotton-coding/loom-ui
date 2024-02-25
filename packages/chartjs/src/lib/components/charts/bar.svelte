<script lang="ts" context="module">
  import { Chart, BarController, CategoryScale, LinearScale, BarElement} from 'chart.js';
  import type { ChartDataset, UpdateMode, ChartOptions } from 'chart.js';
  import BaseChart from './chart.svelte';
  
  Chart.register(BarController, CategoryScale, LinearScale, BarElement);
</script>

<script lang="ts">

  const type= 'bar' as const;
  export let updateMode: UpdateMode = "none";
  export let datasets: ChartDataset<typeof type>[] = [];
  export let options: ChartOptions<typeof type> = {};

</script>

<BaseChart {type} {updateMode} {datasets} {options} {...$$restProps}>
    <slot />
</BaseChart>