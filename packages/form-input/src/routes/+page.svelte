<script lang="ts">
	import { Input, InputGroup, Label, Info, Select, ToggleButton, Password } from '$lib/index.js';


</script>

<h1>Components</h1>

<InputGroup let:id>
	<Input {id}} name="name" />
	<Label for={id}>@test</Label>
</InputGroup>
<InputGroup let:id>
	<Label for={id} >Label</Label>
	<Input {id}} name="name" />
</InputGroup>

<InputGroup let:id type="text" note="Info note">
	<Label for={id} >Specification</Label>
	<Input value="John Doe" name="name" status="valid" />
	<Info>mt</Info>
</InputGroup>

<InputGroup let:id note="Status is error" status="invalid">
	<Input {id} value="John Doe" name="name" type="text" status="invalid" />
	<Select id="dropdown" label="Dropdown" options={['Option 1', 'Option 2', 'Option 3']} />
</InputGroup>

<InputGroup let:id note="Status is error" status="invalid">
	<Label for={id} >Invalid status</Label>
	<Input {id} value="John Doe" name="name" type="text" status="invalid" />
	<Select id="dropdown" label="Dropdown" options={['Option 1', 'Option 2', 'Option 3']} />
</InputGroup>


<InputGroup>
	<Input type="text" />
	<ToggleButton let:checked>
		{#if checked}
			On
		{:else}
			Off
		{/if}
	</ToggleButton>
</InputGroup>

<Password label="Password" name="password" />

<InputGroup>
	<ToggleButton name="radio" radio>
		Ape
	</ToggleButton>
	<ToggleButton name="radio" radio>
		Giraffe
	</ToggleButton>
	<ToggleButton name="radio" radio>
		Elephant
	</ToggleButton>
</InputGroup>