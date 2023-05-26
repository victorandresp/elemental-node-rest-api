const express = require('express')
const server = express()
const { PORT } = require('./config/index')

server.listen(PORT, ()=>{
    console.log(`Quotes APP running on Port:${PORT}`);
})