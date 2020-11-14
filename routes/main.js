const app = require("express").Router();
const exphbs = require('express-handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/register', (req, res) => {
    res.render('register');
});
app.get('/login', (req,res) => {
    console.log("wow someone really wanna log in owo")
})

module.exports = app;