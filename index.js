const express = require('express')
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const helmet = require('helmet');
const config = require('./config');
const umbress = require('umbress')
const rateLimit = require("express-rate-limit");
//  apply to all requests
const app = express();
app.use(umbress({rateLimiter: {enabled: true}}))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.engine('hbs', exphbs({
    extname: '.hbs',
    helpers:{
        isAuth:"",
        title: config.name,
        currency: config.currency.currency
    }
}));
app.set('view engine', 'hbs');


app.use('/', require('./routes/main'))
app.use('/auth/', require('./routes/auth'))
app.listen(5000, ()=>{
    console.log("listening on port 5000")
})