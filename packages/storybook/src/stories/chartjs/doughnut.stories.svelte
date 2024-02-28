<script lang="ts" context="module">

  import { Template, Story } from '@storybook/addon-svelte-csf';
  import { Doughnut, Legend, Title, Tooltip } from '@loom-ui/chartjs';
	import { faker } from '@faker-js/faker';
	import { generateBackgroundColors, generateFloatNumberArray } from './data/generator.js';

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
	const amount = faker.number.int(100);

	const data = {
		datasets: [
			{
				label: 'My First Dataset',
				data: generateFloatNumberArray(amount, 0, 100),
				backgroundColor: generateBackgroundColors(amount),
			}
		]	
	};

	const options = {
		plugins: {
			title: {
				display: true,
				text: 'Custom Chart Title'
			}
		}
	}

</script>

<Template let:args>
	<Doughnut {...args} />
</Template>

<Story name="Simple" args={{data, options}} 
/>


<Story name="With legend">
	<Doughnut 
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
	</Doughnut>
</Story>

<Story name="With legend">
	<Doughnut 
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
	</Doughnut>
</Story>

<Story name="With Tooltip">
	<Doughnut 
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
		<Title text="Actress" />
		<Legend labels={['FEMALE', 'MALE', 'DIVERSE']} />
		<Tooltip position="nearest">
			<svelte:fragment let:tooltip let:chart>
				<table>
					<thead>
						<tr>
							<th>Label</th>
							<th>Value</th>
						</tr>
					</thead>
					<tbody>
						{#each tooltip.dataPoints as dataPoint}
							<tr>
								<td>{dataPoint.label}</td>
								<td>{dataPoint.formattedValue}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</svelte:fragment>
		</Tooltip>
	</Doughnut>
</Story>



<Story name="With legend and title" args={{
		title: 'Actress',
}} let:args>
	<Doughnut 
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
		<Title text="Actress" />
		<Legend labels={['FEMALE', 'MALE', 'DIVERSE']} title={args.title} position="bottom"/>
	</Doughnut>
</Story>

