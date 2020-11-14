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
app.use(function(req, res, next){
    res.status(404);
    res.render("404", {layout:false})
})
module.exports = app;