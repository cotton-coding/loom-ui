<script lang="ts" context="module">

  import { Template, Story } from '@storybook/addon-svelte-csf';
  import { PolarArea, Legend } from '@loom-ui/chartjs';

  export const meta = {
    title: 'Components/Chart.js/PolarArea',
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
	<PolarArea {...args} />
</Template>

<Story name="Simple" args={{
	data: {
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
		]
	}}}
/>


<Story name="With legend">
	<PolarArea
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
		<Legend labels={['FEMALE', 'MALE', 'DIVERSE']} />
	</PolarArea>
</Story>


<Story name="With legend and title" args={{
		title: 'Actress',
}} let:args>
	<PolarArea
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
	>
		<Legend labels={['FEMALE', 'MALE', 'DIVERSE']} position="bottom"/>
	</PolarArea>
</Story>

