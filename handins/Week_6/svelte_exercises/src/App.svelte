<!--This the introduction in svelte-->

<script>
	import Nested from './components/Nested.svelte'
	let rickRolling = 'https://media1.tenor.com/images/467d353f7e2d43563ce13fddbb213709/tenor.gif?itemid=12136175'
	let rickName = 'Rick_Astley'
	let string = 'This is the <strong>html-tag</strong> change'

	import Reactivity from './components/Reactivity.svelte';

	import NestedProps from './components/Props.svelte';
	import NestedPropsAddition from './components/props/NestedPropsAddition.svelte'

	import Logic from './components/Logic.svelte';

	import Events from './components/Events.svelte';
</script>

<main>
	<h1>Hello!</h1>
	<p>This page is a mess, but I hope you enjoy your time here lol.</p>
</main>

<img src={rickRolling} alt={rickName}>
<p>Hello</p>

<Nested/>
<p>{@html string}</p><br><br>


<Reactivity/><br><br>


<NestedProps newAnswer={42}/>
<NestedProps/>
<NestedPropsAddition/>


<Logic/>


<Events/>


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	p {
		color: blue;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>