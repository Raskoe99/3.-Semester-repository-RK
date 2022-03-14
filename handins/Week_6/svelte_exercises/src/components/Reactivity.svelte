<script>
    let buttonNr = 0;

    function onclick() {
        buttonNr += 1
    }


    let countNr = 1

    $: doubled = countNr * 2
    $: tripled = countNr * 3
    $: quadrupled = doubled * 2

    function declareChange() {
        countNr += 1
    }


    let countToDanger = 0;

	$: if (countToDanger >= 70) {
		alert(`Nice`);
		countToDanger = 69;
	}

	function handleClick() {
		countToDanger += 3;
	}
</script>

<main>
    <button on:click="{onclick}">
        Clicked {buttonNr} {buttonNr === 1 ? 'time' : 'times'}
    </button> <br>

    <button on:click="{declareChange}">Count is: {countNr}</button>
    <p>{countNr} * 2 = {doubled}</p>
    <p>{countNr} * 3 = {tripled}</p>
    <p>{doubled} * 2 = {quadrupled}</p>

    <button on:click={handleClick}>Clicked {countToDanger} {countToDanger === 1 ? 'time' : 'times'}</button>
</main>