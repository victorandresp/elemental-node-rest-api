const express = require('express')
const server = express()
const { PORT } = require('./config/index')
const { HomeRoutes } = require("./routes")
const { NotFoundMiddleware } = require("./middlewares")


server.use(express.json())

server.use("/", HomeRoutes)
server.use(NotFoundMiddleware.index)


server.listen(PORT, ()=>{
    console.log(`Quotes APP running on Port:${PORT}`);
})