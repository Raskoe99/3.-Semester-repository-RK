<script>
    export let name;
    export let isGirl = false;
    export let handleFamilyMeetingCall

    console.log(handleFamilyMeetingCall)
</script>

<div class="child" class:girly={isGirl} on:click={handleFamilyMeetingCall}>
    <h5>Hi, I am {name}</h5>
</div>


<style>
    .child {
        user-select: none;
        border-radius: 10%;
    }
    .child:hover {
        background-color: lightgray;
    }
    .girly {
        color: pink;
    }


</style>
