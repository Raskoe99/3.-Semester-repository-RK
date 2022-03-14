<script>
import { escape_attribute_value } from "svelte/internal";

	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}


    let x = 7;


    import Thing from "./props/Thing.svelte";

    let things = [
		{ id: 1, color: 'darkblue' },
		{ id: 2, color: 'indigo' },
		{ id: 3, color: 'deeppink' },
		{ id: 4, color: 'salmon' },
		{ id: 5, color: 'gold' }
	];

	function deleteEle() {
		things = things.slice(1);
	}

    
    let promise = getRandomNumber();

	async function getRandomNumber() {
		const res = Math.random()
		const text = res.toString()
	}

	function handleClick() {
		promise = getRandomNumber();
	}
</script>

{#if user.loggedIn}
	<button on:click={toggle}>
		Log out
	</button>
{:else}
	<button on:click={toggle}>
		Log in
	</button>
{/if}


{#if x > 10}
	<p>{x} is greater than 10</p>
{:else if 5 > x}
	<p>{x} is less than 5</p>
{:else}
	<p>{x} is between 5 and 10</p>
{/if}


<button on:click={deleteEle}>
	Remove first element
</button>

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 1em">
	<div>
		<h2>Keyed</h2>
		{#each things as thing (thing.id)}
			<Thing current={thing.color}/>
		{/each}
	</div>

	<div>
		<h2>Unkeyed</h2>
		{#each things as thing}
			<Thing current={thing.color}/>
		{/each}
	</div>
</div>


