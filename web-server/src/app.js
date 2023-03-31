const path = require('path')
const express = require('express')
const hbs = require('hbs')


const geocode = require('./utils/forecast')
const forecast = require('./utils/forecast')

const app = express()

// Define paths for express config
const publicDirectoryPath = (path.join(__dirname, '../public'))
const viewPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//Setup handlebars engine and views loction
app.set('view engine', 'hbs')
app.set('views', viewPath)
hbs.registerPartials(partialPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))


app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Blossom Ese'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Blossy baby'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'I am here to help',
        title: 'help',
        name: 'Tamunor Otonye Meyesan'
    })
})


app.get('/weather', (req, res) => {
    if(!req.query.address){
return res.send({
    error: "Address must be provided"
})
} res.send({
        forecast: 'its 20 degrees hot',
        location: 'Lagos',
        address: req.query.address
    })
})

app.get('/products', (req, res) => {
    if(!req.query.search) {
 return  res.send({
    error: 'You must provide a search term'
   })
    } console.log(req.query.search);
res.send({
    products: []
})
})


app.get('/help/*', (req, res) =>{
    res.render('test', {
        title: '404',
        name: 'Otonye Tamunor',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req,res) => {
    res.render('test', {
        title: 'wrong page',
        name: 'Otonye Tamunor',
        errorMessage: 'Page not found'
    })
})



app.listen(3000, () => {
    console.log('Server is up on port 3000');
})