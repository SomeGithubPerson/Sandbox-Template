const app = require("express").Router();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path')
const bodyParser = require('body-parser');
const db = require('better-sqlite3')(__dirname+'/../database/sandbox_db.db');
const bcrypt = require('bcrypt')
const saltRounds = 10
const nanoid = require('nanoid');
const { Hash } = require("crypto");

console.log(__dirname)
app.get('/', (req, res)=> {
    res.send("yes")
})
app.post('/register', async (req, res)=> {
   console.log('Linking to DB...');
   bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
       let smt = db.prepare(`INSERT INTO users (userid, username, email, password) VALUES (?, ?, ?, ?)`)
       smt.run(nanoid.nanoid(), req.body.username, req.body.email, hash )
       console.log(`New user with name ${req.body.username}\nPassword: ${hash}`)
       res.send("Done!")
});


})
app.post('/login', (req,res) => {
    console.log("wow someone really wanna log in owo")
})


module.exports = app;