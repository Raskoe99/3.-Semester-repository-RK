<script>
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	function sayHello() {
		dispatch('message', {
			text: 'This is getting old lol'
		});
	}
</script>

<button on:click={sayHello}>
	Click to say uuuuuugh
</button>