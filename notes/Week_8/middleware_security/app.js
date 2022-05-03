import express from "express"
const app = express()

import rateLimit from 'express-rate-limit'

import planetsRouter from "./routers/planets.js"

app.use(planetsRouter)

import session from 'express-session'

const authLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

const baseLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use("auth", authLimiter) //For all pages with auth, use authlimiter

app.use(baseLimiter) //For all pages, period

app.get("/auth/login", (req, res) => {
    res.send( { message : "You are trying to log in..."} )
}) 

app.use(session({
  secret: 'keyboard cat should not be pushed',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))



app.use(express.static("public"))

import helmet from "helmet"

const PORT = 3000

app.use(helmet())

function ipLogger(req, res, next) {
    console.log(req.ip)
    next()
}

app.use(/*"  /auth/*  only targets endpoint with /auth/*/ipLogger)

app.get("/frontgate", ipLogger, (req, res) => {
    res.send({})
})

let isHatchOpen = true
function allowEscape(req, res, next) {
    if(isHatchOpen) {
        console.log("Go on")
        req.escapee = "Jimmy"
        next()
    } else {
        console.log("Sucks to be you, you're stuck")
    }
}

app.get("/escapehatch", allowEscape, (req, res) => {
    res.send({ message: `Congrats ${req.escapee}, you've managed to escape` })
})

app.get("/room", (req, res, next) => {
    //res.send({ data: "You are in room 1" })
    next() //If no response, next /room endpoint
})

app.get("/room", (req, res) => {
    res.send({ data: "You are in room 2" })
    
})

app.get("*", (req, res) => {
    res.send("Filepath not found")
})

app.listen(PORT, () => {
    console.log("Starting server on ", PORT)
})