<script>
    import io from "socket.io-client"
    
    const socket = io();

    let lastPersonToChangeColor;

    socket.on("changeTheColor", ({ data, username }) => {
        //in svelte don't do access document, do it the svelte way
        document.body.style.backgroundColor = data;
    })

    function changeColor(event) {
        socket.emit("colorChanged", { data : event.target.value })
    }
</script>

<h3>Last person to use color: {lastPersonToChangeColor}</h3>
<input type="color" on:change="{changeColor}">