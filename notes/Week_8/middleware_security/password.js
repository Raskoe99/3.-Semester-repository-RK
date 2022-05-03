import bcrypt from "bcrypt"

console.log(bcrypt)

const saltRounds = 12
const plainTextPassword = "test"
const hashedPassword = "$2b$12$VhxmwJTxPbSbtjwmJ8ChCukC.4Oef4/QlJVfuoMdtnO9nYG6HVtoS"

async function loginRouter() {
    const isSame = await bcrypt.compare(plainTextPassword, hashedPassword)
    console.log(isSame)
}

async function signUpRouter() {
    const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds)
    console.log(hashedPassword)
}

signUpRouter()