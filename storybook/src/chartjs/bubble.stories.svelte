<script lang="ts" context="module">

  import { Template, Story } from '@storybook/addon-svelte-csf';
  import { Bubble, Legend, Title } from '@loom-ui/chartjs';

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


const data = {
  datasets: [
    {
      label: 'John',
      data: [
        {
          x: 3,
          y: 7,
          r: 10,
        },
      ],
      backgroundColor: '#ff6384',
      hoverBackgroundColor: '#ff6384',
    },
    {
      label: 'Peter',
      data: [
        {
          x: 3.2,
          y: 7,
          r: 10,
        },
      ],
      backgroundColor: '#44e4ee',
      hoverBackgroundColor: '#44e4ee',
    },
    {
      label: 'Donald',
      data: [
        {
          x: 3.4,
          y: 7,
          r: 10,
        },
      ],
      backgroundColor: '#62088A',
      hoverBackgroundColor: '#62088A',
    },
  ],
};

</script>

<Template let:args>
  <Bubble {...args} />
</Template>

<Story name="With legend">
	<Bubble 
		{data}
		responsive
		--chart-width="80vw"
		--chart-height="100vh"
		
	>
		<Legend />
	</Bubble>
</Story>


<Story name="With legend and title" args={{
		title: 'Actress',
}} let:args>
	<Bubble 
		{data}
		responsive
		--chart-width="80vw"
		--chart-height="100vh"
	>
		<Legend />
		<Title text="Bubble Chart" />
	</Bubble>
</Story>