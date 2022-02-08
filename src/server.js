const express = require('express')
const app = express()
const {PORT } = require('./config')
const ejs = require('ejs')


//
const path = require('path');
const cookeParser = require('cookie-parser');
app.use(express.urlencoded({extended: true}))
//
app.use(express.json());
app.use(cookeParser())
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, './views'))
app.use('/assets',express.static(path.resolve(__dirname, 'public')))

//
const  router = require('./controllers')


app.use(router)

app.listen(PORT, console.log(PORT))

