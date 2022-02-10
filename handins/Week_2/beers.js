//import express
const { request, response } = require("express")
const express = require("express") //declaration
const app = express() //instatiation

app.use(express.json())

const beers = [{beerId : 1, beerType : "IPA"}, {beerId : 2, beerType : "Pale Ale"}, {beerId : 3, beerType : "White"}]

//endpoint (url), callback function (lambda)
app.get("/beers", (req, res) => {
    res.send(beers)
})
//task implement an empty callback function in the line above (only)

app.get("/beers/:id", (req, res) => {
    seekId = parseInt(req.params.id)
    array.forEach(beer => {
        if (beer.beerId === seekId) {
            res.send(beer)
        } else {
            console.log("Beer does not exist/ID not found")
        }
    });
})

app.post("/createBeer", (req, res) => {
    beers.push(req.body)
    res.send(beers)
})

app.delete("/deleteBeer/:id", (req, res) => {
    seekId = parseInt(req.params.id)
    beers.forEach(beer => {
        if (beer.beerId === seekId) {
            beers.splice(beers.indexOf(beer), 1)
        } else {
            console.log("Beer does not exist/ID not found")
        }
    });
    res.send(beers)
})

app.put("/updateBeer/:id", (req, res) => {
    seekId = parseInt(req.params.id)
    beers.forEach(beer => {
        if (beer.beerId === seekId) {
            beers[seekId-1] = req.body
        } else {
            console.log("Beer does not exist/ID not found")
        }
    });
    res.send(beers)
})

app.patch("/patchBeer/:id", (req, res) => {
    seekId = parseInt(req.params.id)
    beers.forEach(beer => {
        if (beer.beerId === seekId) {
            beers[seekId-1] = req.body
        } else {
            console.log("Beer does not exist/ID not found")
        }
    });
    res.send(beers)
})

app.listen(8080)