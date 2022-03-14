<script>
	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}


    let n = { x: 0, y: 0 };


    function noMoreAlerts() {
		alert('AAAAAAAAAAAAA!')
	}


    import CustomButton from "./props/CustomButton.svelte";

	function handleNewClick() {
		alert('uuuuuuurgh');
	}
</script>

<div on:mousemove={handleMousemove}>
	The mouse position is {m.x} x {m.y}
</div>

<div on:mousemove="{e => n = { x: e.clientX, y: e.clientY }}">
	The mouse position is {n.x} x {n.y}
</div>


<button on:click|once={noMoreAlerts}>
	AAAAA!
</button> <br>


<CustomButton on:click={handleNewClick}/>


<style>
	div { width: 100%; height: 100%; }
</style>