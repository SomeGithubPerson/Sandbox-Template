const app = require("express").Router();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
console.log(__dirname)
app.get('/', (req, res)=> {
    res.send("yes")
})
app.post('/register', (req, res)=> {
   console.log('Linking to DB...');


})
app.post('/login', (req,res) => {
    console.log("wow someone really wanna log in owo")
})
app.use(function(req, res, next){
    res.status(404);
    res.render("404", {layout:false})
})

module.exports = app;