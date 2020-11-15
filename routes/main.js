const app = require("express").Router();
const exphbs = require('express-handlebars');
const auth = require('../middlewares/auth')
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
app.get('/home', auth, (req,res)=> {
    res.render('home')
})
app.use(require('express-status-monitor')());

module.exports = app;

app.get('/admin', (req, res)=>{
    res.render("admin")
})