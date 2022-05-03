<script>
    import Parent from "../components/parent/Parent.svelte";
    import Child from "../components/child/Child.svelte";

    const parent = [
        //Key er (ofte) det samme som ID
        {
            key: 1,
            name: "mother"
        },
        {
            key: 2,
            name: "father"
        }
    ]

    function onFamilyMeetingCall() {
        console.log("Family meeting called")
    }
</script>

<h2>This is the home of the Svelte family</h2>
{#each parent as parent (parent.key)}
    <Parent handleFamilyMeetingCall = {onFamilyMeetingCall} name = {parent.name} />
{/each}
<Child name = "Stephanie" isGirl = {true} handleFamilyMeetingCall = {onFamilyMeetingCall}/>
<Child name = "Anders" handleFamilyMeetingCall = {onFamilyMeetingCall}/>