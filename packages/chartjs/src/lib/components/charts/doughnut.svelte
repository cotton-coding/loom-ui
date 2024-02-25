<script lang="ts" context="module">
  import { Chart, ArcElement, DoughnutController, type ChartDataset, type UpdateMode, type ChartOptions } from 'chart.js';
  import BaseChart from './chart.svelte';
  
  Chart.register(DoughnutController, ArcElement);
</script>

<script lang="ts">

  const type= 'doughnut' as const;
  export let updateMode: UpdateMode = "none";
  export let datasets: ChartDataset<typeof type>[] = [];
  export let options: ChartOptions<typeof type> = { responsive: true };

</script>

<BaseChart {type} {updateMode} {datasets} {options} {...$$restProps} >
  <slot />
</BaseChart>