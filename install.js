const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database/sandbox_db.db', ()=>{
    console.log("Database Created")

})

db.run(`CREATE TABLE users (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);`, ()=>{
    console.log("Users Created.")
})