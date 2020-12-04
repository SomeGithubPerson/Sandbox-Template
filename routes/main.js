const app = require("express").Router();
const { boolean } = require("joi");
const auth = require('../middlewares/auth')
const config = require('../config')
const db = require("better-sqlite3")(__dirname + "/../database/sandbox_db.db");
app.get('/', function (req, res) {
    res.render('home', {
        name: config.name
    });
});
app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/users/:username', (req, res) => {
    const stmt = db.prepare('SELECT username, userid, Admin, post_count FROM users WHERE username = ?');
    const userstuff = stmt.get(req.params.username);
    if(userstuff ==undefined){
        res.send("not found")
    } else {
    res.render("user", {
        name: config.name,
        user_posts: userstuff.post_count,
        Admin: userstuff.Admin,
        userid: userstuff.userid,
        username: userstuff.username
    })}
})
app.get('/login', (req, res) => {
    res.render("login");
})

app.get('/shop', (req, res) => {
    res.render('shop');
})
app.get('/home', auth, (req, res) => {
    res.render('home')
})
app.use(require('express-status-monitor')());

module.exports = app;

app.get('/admin', (req, res) => {
    res.render("admin")
})