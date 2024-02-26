<script lang="ts" context="module">

  import { Template, Story } from '@storybook/addon-svelte-csf';
  import { Bubble, Legend } from '@loom-ui/chartjs';

  export const meta = {
    title: 'Components/Chart.js/Bubble',
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
  <Bubble {...args} />
</Template>

<Story name="With legend">
	<Bubble 
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
	</Bubble>
</Story>


<Story name="With legend and title" args={{
		title: 'Actress',
}} let:args>
	<Bubble 
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
	</Bubble>
</Story>