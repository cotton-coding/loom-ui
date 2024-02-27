<script lang="ts">

  import { CategoryScale, Chart, LineElement, LinearScale, PointElement, ScatterController} from 'chart.js';
  import type { ChartData, UpdateMode, ChartOptions, Plugin } from 'chart.js';
  import BaseChart from './chart.svelte';
  
  const type= 'scatter' as const;
  export let updateMode: UpdateMode = "none";
  export let data: ChartData<typeof type>;
  export let options: ChartOptions<typeof type> = {};
  export let plugins: Plugin<typeof type>[] = [];

  Chart.register(ScatterController, LineElement, CategoryScale, LinearScale, PointElement);

</script>

<BaseChart {type} {updateMode} {data} {options} {plugins} {...$$restProps}>
    <slot />
</BaseChart>