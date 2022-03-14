<script>
    import TableBody from "../tableBody/TableBody.svelte";

    const tableBodyHTML = TableBody

    const personTable = [
        "1",
        "2",
        "3",
        "4",
        "5"
        ]

    personTable.forEach(person => {
        document.getElementById("tableBody").innerHTML(tableBodyHTML)
    });    
</script>

<table>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Picture</th>
    </tr>
    <tr id="tableBody">
        <TableBody/>
    </tr>
</table>  