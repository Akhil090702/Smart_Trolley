require('dotenv').config();
const express = require("express");
const app = express();
const ejs = require('ejs');
const path = require("path");
const expressLayout = require('express-ejs-layouts');
const mongoose = require("mongoose");
// const port = process.env.port || 3000;
const port = process.env.PORT;
const url = process.env.DATABASE_URL;
const session = require('express-session');
const flash = require("express-flash");
require('dotenv').config();
// const MongoDBstore = require('connect-mongo')(session);


// Database connection
// const url = 'mongodb://0.0.0.0/Smart_trolley';
// const url = 'mongodb+srv://Akhil-Food:JGWvYRgkVOQcJov5@food-order.xj1elrp.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(url);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("DataBase Connected!");
})
connection.on('error', () => {
    console.log("error");
})

//session store

// const mongoStore = new MongoDBstore({
//     mongooseConnection: connection,
//     collection:'sessions'
// })


// Session config
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    // store: mongoStore,
    saveUninitalized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
}))

//Use flash as middleware
app.use(flash());

// Setting to Assets
// app.use(express.static(__dirname + '/public'));
// app.use(express.static('assets'));
app.use(express.static(__dirname + '/assets'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));


// Global Middleware
app.use((req, res, next) => {
    res.locals.session = req.session
    next()
})


//set template engine
app.use(expressLayout);
app.set('views', path.join(__dirname, '/resources/views'))
app.set('view engine', 'ejs')


require('./routes/web')(app)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
