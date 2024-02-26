<script lang="ts" context="module">

  import { Template, Story } from '@storybook/addon-svelte-csf';
  import { Scatter, Legend, Title } from '@loom-ui/chartjs';
	import { generateFloatNumberArray, generateLabels } from './data/generator.js';

  export const meta = {
    title: 'Components/Chart.js/Scatter',
    component: Image,
    argTypes: {

    },
    parameters: {
      layout: 'centered',
    },
  };

</script>


<script lang="ts">
const labels = generateLabels(10);
const data = {
  datasets: [
    {
      label: 'Dataset 1',
      data: generateFloatNumberArray(10, 0, 100),
      yAxisID: 'y',
    },
    {
      label: 'Dataset 2',
      data: generateFloatNumberArray(10, 0, 100),
			yAxisID: 'y2',
    }
  ]
};

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Scatter Multi Axis Chart'
      }
    },
    scales: {
      y: {
        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        position: 'left',
      },
      y2: {
        type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
        position: 'right',
        reverse: true,
        grid: {
          drawOnChartArea: false // only want the grid lines for one axis to show up
        }
      }
    }
  };


</script>

<Template let:args>
  <Scatter {...args} />
</Template>

<Story name="With legend">
	<Scatter 
		{data}
		{options}
		responsive
		--chart-width="80vw"
		--chart-height="100vh"
		
	>
		<Legend {labels}/>
	</Scatter>
</Story>


<Story name="With legend and title" args={{
		title: 'Actress',
}} let:args>
	<Scatter 
		data={{
			datasets: [
			{
				label: 'My First Dataset',
				data: [300, 50, 100],
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 205, 86)',
				],
			}
		]}}
		responsive
		--chart-width="80vw"
		--chart-height="100vh"
	>
		<Legend labels={['FEMALE', 'MALE', 'DIVERSE']} title={args.title}/>
	</Scatter>
</Story>