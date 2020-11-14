const express = require('express')
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const config = require('./config');
var Ddos = require('ddos')
var ddos = new Ddos({burst:10, limit:15})

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  });
   
  //  apply to all requests
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(limiter);
app.use(ddos.express);
app.use(cookieParser());
app.use(helmet());
app.engine('hbs', exphbs({
    extname: '.hbs',
    helpers:{
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