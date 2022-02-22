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
//Task: implement an empty callback function in the line above (only)

//Task: Create frontpage


app.get("/beers/:id", (req, res) => {
    const foundBeer = beers.findIndex(beer => beer.id === Number(req.params.id))
    foundBeer ? res.send({ data: foundBeer }) : res.status(204).send({})
})

let currentID = 0
app.post("/beers", (req, res) => {
    let beerToPush = beers.push(req.body)
    beerToPush.id = ++currentID
    beers.push(beerToPush)
    res.send(beers)
})

app.delete("/beers/:id", (req, res) => {
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

app.put("/beers/:id", (req, res) => {
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


app.patch("/beers/:id", (req, res) => {
    seekId = parseInt(req.params.id)
    const foundBeerIndex = beers.findIndex(beer => beer.id === Number(req.params.id))
    if (foundBeerIndex !== -1){
        const foundBeer = beers[foundBeerIndex]
        const beerToPatch = req.body
        const patchedBeer = {...foundBeer, ...beerToPatch, id: foundBeer.id}
        beers[foundBeerIndex] = patchedBeer

        res.send(beers)
    } else {
        res.status(204).send({})
    }    
})

app.listen(8080)