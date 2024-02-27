<script lang="ts">

  import { CategoryScale, Chart, LineController, LineElement, LinearScale, PointElement} from 'chart.js';
  import type { ChartData, UpdateMode, ChartOptions, Plugin } from 'chart.js';
  import BaseChart from './chart.svelte';

  const type= 'line' as const;
  export let updateMode: UpdateMode = "none";
  export let data: ChartData<typeof type>;
  export let options: ChartOptions<typeof type> = {};
  export let plugins: Plugin<typeof type>[] = [];

  Chart.register(LineController, PointElement, LineElement, LinearScale, CategoryScale);

</script>

<BaseChart {type} {updateMode} {data} {options} {plugins} {...$$restProps}>
    <slot />
</BaseChart>