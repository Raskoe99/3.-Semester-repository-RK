<script>
	import UserRegistration from "./Pages/UserRegistration/UserRegistration.svelte";

	import { onMount } from "svelte";

	import Colors from "./Pages/Colors/Colors.svelte"

	let username;

	onMount(async () => {
		const response = await fetch("/api/fetchUser");
		const { data } = await response.json();
		username = data;
	});
</script>

<main>
	{#if username} 
		<Colors/>
	{:else}
		<UserRegistration/>
	{/if}
</main>

<style>
	
</style>