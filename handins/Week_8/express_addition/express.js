const { request, response } = require("express")
const express = require("express") //declaration
const app = express() //instatiation

app.use(express.json())

const beers = [{beerId : 1, beerType : "IPA"}, {beerId : 2, beerType : "Pale Ale"}, {beerId : 3, beerType : "White"}]

//endpoint (url), callback function (lambda)
app.get("/beers", (req, res) => {
    res.send(beers)
})

app.listen(8080)