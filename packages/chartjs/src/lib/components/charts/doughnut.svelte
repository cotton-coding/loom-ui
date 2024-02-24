<script lang="ts" context="module">
  import { Chart, ArcElement, DoughnutController, type ChartDataset, type UpdateMode } from 'chart.js';
  import BaseChart from './chart.svelte';
  
  Chart.register(DoughnutController, ArcElement);
</script>

<script lang="ts">

  const type= 'doughnut' as const;
  export let updateMode: UpdateMode = "none";
  export let datasets: ChartDataset<typeof type>[] = [];

</script>

<BaseChart {type} {updateMode} {datasets} >
  <slot />
</BaseChart>