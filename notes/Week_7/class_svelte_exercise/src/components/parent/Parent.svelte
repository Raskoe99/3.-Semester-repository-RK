<script>
    export let name = "parentName"
    export let handleFamilyMeetingCall

    console.log(handleFamilyMeetingCall)

    
</script>

<h4 class="parent" on:click={handleFamilyMeetingCall}>
    Hello I am a svelte {name}
</h4>

<style>
    .parent {
        user-select: none;   
    }
    .parent:hover {
        background-color: lightgray; 
    }
</style>