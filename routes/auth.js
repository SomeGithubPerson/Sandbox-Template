const app = require("express").Router();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path')

const bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose();
console.log(__dirname)
var db = new sqlite3.Database(`${__dirname}/../database/sandbox_db.db`, sqlite3.OPEN_READWRITE);
app.get('/', (req, res)=> {

})
app.post('/register', (req, res)=> {
   console.log('Starting serializing...')
    db.serialize(function() {
        console.log("Serializing done")
        
        db.run(`INSERT INTO user
        VALUES (value1, value2, value3, ...);
        `)
    });


})
app.post('/login', (req,res) => {
    console.log("wow someone really wanna log in owo")
})

module.exports = app;