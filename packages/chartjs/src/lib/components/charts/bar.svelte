<script lang="ts">

  import { Chart, BarController, CategoryScale, LinearScale, BarElement} from 'chart.js';
  import type { ChartData, UpdateMode, ChartOptions, Plugin } from 'chart.js';
  import BaseChart from './chart.svelte';

  const type= 'bar' as const;
  export let updateMode: UpdateMode = "none";
  export let data: ChartData<typeof type>;
  export let options: ChartOptions<typeof type> = {};
  export let plugins: Plugin<typeof type>[] = [];


  Chart.register(BarController, CategoryScale, LinearScale, BarElement);

</script>

<BaseChart {type} {updateMode} {data} {options} {plugins} {...$$restProps}>
    <slot />
</BaseChart>