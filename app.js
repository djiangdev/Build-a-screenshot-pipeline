var express = require('express')
var path = require('path')
var logger = require('morgan')

var app = express()
app.use(logger('dev'))

module.exports = app
