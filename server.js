const express = require("express");
const app = express();
const ejs = require('ejs');
const path = require("path");
const expressLayout = require('express-ejs-layouts');

const port = process.env.port || 3000;


//set template engine
app.use(express.static('assets'));
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('home');
})

app.get('/cart', (req, res) => {
    res.render('customers/cart');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
