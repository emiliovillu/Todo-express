const express = require('express')
const bodyParser =require('body-parser')
const path = require('path')
const uuid = require('uuid/v4')
const app = express()
const routes = require('./routes')

let tasks = []

app.set('view engine', 'pug')
app.use(express.static('public'));
app.set('views', path.resolve(__dirname, 'views'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)


app.listen(3000)
console.log('Listening on PORT 3000...')