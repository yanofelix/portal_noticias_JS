const consign = require('consign')
const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express()
app.set('view engine', 'ejs')
app.set('views', './app/views')

app.use(bodyParser.urlencoded({extended: true}))
app.use(expressValidator())

consign()
    .include('app/routes')
    .then('config/databaseCon.js')
    .then('app/models')
    .then('app/controllers')
    .into(app)


module.exports = app