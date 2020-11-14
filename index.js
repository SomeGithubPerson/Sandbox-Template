const express = require('express')
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const config = require('./config');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// To parse cookies from the HTTP Request
app.use(cookieParser());

app.engine('hbs', exphbs({
    extname: '.hbs',
    helpers:{
        title: yconfig.name,
        

    }
}));
app.set('view engine', 'hbs');


app.use('/', require('./routes/main'))
app.use('/auth/', require('./routes/auth'))
app.listen(5000, ()=>{
    console.log("listening on port 5000")
})