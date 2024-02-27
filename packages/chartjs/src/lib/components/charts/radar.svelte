<script lang="ts">

  import { Chart, LineElement, PointElement, RadarController, RadialLinearScale } from 'chart.js';
  import type { ChartData, UpdateMode, ChartOptions, Plugin } from 'chart.js';
  import BaseChart from './chart.svelte';

  const type= 'radar' as const;
  export let updateMode: UpdateMode = "none";
  export let data: ChartData<typeof type>;
  export let options: ChartOptions<typeof type> = {};
  export let plugins: Plugin<typeof type>[] = [];

  Chart.register(RadarController, RadialLinearScale, PointElement, LineElement);

</script>

<BaseChart {type} {data} {options} {plugins} {updateMode} {...$$restProps} >
  <slot />
</BaseChart>