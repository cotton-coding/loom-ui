<script lang="ts" context="module">

  import { Template, Story } from '@storybook/addon-svelte-csf';
  import { Bar, Legend } from '@loom-ui/chartjs';

  export const meta = {
    title: 'Components/Chart.js/Bar',
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
  <Bar {...args} />
</Template>

<Story name="With legend">
	<Bar 
		datasets={[
			{
				label: 'My First Dataset',
				data: [300, 50, 100],
				backgroundColor: [
					'rgb(255, 99, 132)',
					'rgb(54, 162, 235)',
					'rgb(255, 205, 86)',
				],
			}
		]}
		responsive
		--chart-width="80vw"
		--chart-height="100vh"
		
	>
		<Legend labels={['FEMALE', 'MALE', 'DIVERSE']} />
	</Bar>
</Story>


<Story name="With legend and title" args={{
		title: 'Actress',
}} let:args>
	<Bar datasets={[
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
	</Bar>
</Story>