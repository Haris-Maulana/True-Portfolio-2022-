const express = require('express')
const dotenv = require('dotenv')

const PORT = process.env.PORT || 8080;

const app = express()

app.use(express.json())



app.use(PORT, ()=> console.log(`Server run at localhost: ${PORT}`))