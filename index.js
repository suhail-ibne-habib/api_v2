require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT

console.log(port)