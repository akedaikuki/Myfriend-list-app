// modules
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override') 
const handlebarsHelper = require('./config/handlebars-helper')
const routes = require('./routes')
require('./config/mongoose')

// app
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs', handlebarsHelper  }))
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

// start and listen on the Express server
app.listen(3000, () => {
    console.log('App is running on http://localhost:3000')
})