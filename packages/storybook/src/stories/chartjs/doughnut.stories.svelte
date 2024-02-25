<script lang="ts" context="module">

  import { Template, Story } from '@storybook/addon-svelte-csf';
  import { Doughnut, Legend } from '@loom-ui/chartjs';

  export const meta = {
    title: 'Components/Chart.js/Doughnut',
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
  <Doughnut {...args} />
</Template>

<Story name="Simple" args={{
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
	}} 
/>


<Story name="With legend">
	<Doughnut datasets={[
		{
			label: 'My First Dataset',
			data: [300, 50, 100],
			backgroundColor: [
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)',
				'rgb(255, 205, 86)',
			],
		}
	]}>
		<Legend labels={['FEMALE', 'MALE', 'DIVERSE']} />
	</Doughnut>
</Story>


<Story name="With legend and title" args={{
		title: 'Actress',
}} let:args>
	<Doughnut datasets={[
		{
			label: 'My First Dataset',
			data: [300, 50, 100],
			backgroundColor: [
				'rgb(255, 99, 132)',
				'rgb(54, 162, 235)',
				'rgb(255, 205, 86)',
			],
		}
	]}>
		<Legend labels={['FEMALE', 'MALE', 'DIVERSE']} title={args.title}/>
	</Doughnut>
</Story>