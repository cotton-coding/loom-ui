<script lang="ts" context="module">

  import { Template, Story } from '@storybook/addon-svelte-csf';
  import { Line, Legend, Tooltip } from '@loom-ui/chartjs';

  export const meta = {
    title: 'Components/Chart.js/Line',
    component: Image,
    argTypes: {

    },
    parameters: {
      layout: 'centered',
    },
  };

</script>


<script lang="ts">



</script>

<Template let:args>
  <Line {...args} />
</Template>

<Story name="With legend and tooltip">
	<Line 
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
		<Tooltip />
		<Legend labels={['FEMALE', 'MALE', 'DIVERSE']} />
	</Line>
</Story>


<Story name="With legend and title" args={{
		title: 'Actress',
}} let:args>
	<Line 
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
	</Line>
</Story>