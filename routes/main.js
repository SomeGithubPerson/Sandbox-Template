const app = require("express").Router();
const exphbs = require('express-handlebars');

app.get('/', function (req, res) {
    res.render('home');
});
app.get('/register', (req, res) => {
    res.render('register');
});
app.get('/login', (req,res) => {
   res.render("login");
})

app.get('/shop', (req,res)=>{
    res.render('shop');

})
app.use(require('express-status-monitor')());

module.exports = app;