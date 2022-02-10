//import express
const express = require("express") //declaration
const app = express() //instatiation

//or, in a single line:
//const app = require ("express")()

app.use(express.json())

//endpoint (url), callback function (lambda)
app.get("/", (request, response) => {
    response.send("We did it!")
})
//task implement an empty callback function in the line above (only)

app.get("/welcome", (request, response) => {
    response.send("Hello and welcome")
})

app.post("/mirror", (req, res) => {
    res.send(req.body)
    console.log(req.body)
})

app.listen(8080)

