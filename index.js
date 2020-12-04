const express = require('express')

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const config = require('./config');
const umbress = require('umbress')
//  apply to all requests
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.set('views', "./views")
app.set('view engine', 'ejs');


app.use('/', require('./routes/main'))
app.use('/auth/', require('./routes/auth'))

app.listen(5000, ()=>{
    console.log("listening on port 5000")
})