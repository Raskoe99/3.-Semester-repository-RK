import { Router } from "express"
const router = Router()

router.get("/spinPlanet", (res, req) => {
    req.session.planetName = "Jupyter"
    const wasSpinning = req.session.isSpinning
    req.session.isSpinning = true
    res.send({ message: `Planet was ${wasSpinning}.`})
})
router.get("/stopPlanet", (res, req) => {
    console.log(req.session.planetName)
    const wasSpinning = req.session.isSpinning
    req.session.isSpinning = false
    res.send({ message: `Planet was ${wasSpinning}.`})
})

export default router