const { request, response } = require("express")
const express = require("express") //declaration
const app = express() //instatiation

app.use(express.json())

//endpoint (url), callback function (lambda)
app.get("/clock", (req, res) => {
    res.sendFile(__dirname + "/public/clock.html")
})

const port = 8080
app.listen(port, (error) => {
    console.log("Successfully connected to port", port)
})
console