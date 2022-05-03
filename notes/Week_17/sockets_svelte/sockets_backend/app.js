import "dotenv/config";
//import SECRET_SESSION from ".env"

import express from "express";
const app = express();

import path from "path";
app.use(express.static(path.resolve("../sockets_svelte/public/")))

import session from "express-session";
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false} //only true if https, otherwise turns up undefined
});
app.use(sessionMiddleware);
app.use(express.urlencoded({extended: true}));

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server)

io.on("connector", (socket) => {
    socket.io("colorChanged", (data) => {
        const username = socket.request.session.username;
        data.username = username;
        socket.emit("changeTheColor", { data, username });
    });
});

const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);
io.use(wrap(sessionMiddleware));

import userRegistrationRouter from "./routers/userRegistration.js";
app.use(userRegistrationRouter)

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log("Server is running on port:", PORT));