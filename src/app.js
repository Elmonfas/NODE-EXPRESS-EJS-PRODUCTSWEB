const express = require('express')
const app = express()
const path = require('path')

app.set('port', 8000)
app.set('views', path.join(__dirname, 'views'))   
app.set('viwe engine', 'ejs')


app.use(express.text())
app.use(express.json())
app.use(express.urlencoded({extended: false}))


app.use(require('./routes/index'))

app.use(express.static(path.join(__dirname, 'public')))

app.use((req, res, next) => {
    res.status(404).render('404.ejs')
})


module .exports = app