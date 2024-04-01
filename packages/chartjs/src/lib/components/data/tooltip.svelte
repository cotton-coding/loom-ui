<script lang="ts">
	import { Chart, Tooltip, type TooltipOptions} from 'chart.js';
	import type { _DeepPartialObject, chartContextData } from "$lib/definitions.js";
  import { CONTEXT_CHART } from '$lib/definitions.js';
	import { onMount, getContext, hasContext, afterUpdate } from 'svelte';

  const { options, plugins } = getContext<chartContextData>(CONTEXT_CHART);
  let tooltipEl: HTMLDivElement;
  export let position: TooltipOptions['position'] = 'average';
  export let hide: TooltipOptions['enabled'] = $$slots.default ? true : false;

  onMount(() => {
    plugins.update((chartPlugins) => {
      return [Tooltip, ...chartPlugins];
    });
  })

  afterUpdate(() => {
    
    setTooltipOptions({ position, enabled: !hide });
    
  })

  function setTooltipOptions(props: _DeepPartialObject<TooltipOptions>) {
  
    options.update((chartOptions) => {
      return {
        ...chartOptions,
        plugins: {
          ...chartOptions.plugins,
          tooltip: {
            ...chartOptions.plugins?.tooltip ?? {},
            ...props
          }
        }
      }
    });
  }

  let externalContext: Parameters<TooltipOptions['external']>[0];

  if($$slots.default) {
    //set external function for tooltip
    options.update((chartOptions) => {
      return {
        ...chartOptions,
        plugins: {
          ...chartOptions.plugins,
          tooltip: {
            ...chartOptions.plugins?.tooltip ?? {},
            external: (context) => externalContext = context
            
          }
        }
      }
    });
    
  }

  function getTopOfTooltip({chart, tooltip}: typeof externalContext) {
    const { offsetTop: positionY } = chart.canvas;
    return positionY + tooltip.caretY + 'px'
  }

  function getLeftOfTooltip({chart, tooltip}: typeof externalContext) {
    const { offsetLeft: positionX } = chart.canvas;
    return positionX + tooltip.caretX + 'px'
  }
  
</script>

{#if $$slots.default && externalContext}
  <div 
    class="tooltip" 
    bind:this={tooltipEl}
    style:opacity={externalContext.tooltip.opacity}
    style:top={getTopOfTooltip(externalContext)}
    style:left={getLeftOfTooltip(externalContext)}
  >
    <slot {...externalContext}/>
  </div>
{:else}
<div>Test</div>
{/if}

<style>
  .tooltip {
    position: absolute;
    transform: translate(-50%, 0);
    transition: all 0.3s;
    background-color: white;
    border: 1px solid black;
    pointer-events: none;
    border-radius: 3px;
    padding: 5px;
  }
</style>