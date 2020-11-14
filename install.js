const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database/sandbox_db.db', ()=>{
    console.log("Database Created")

})

db.run('create table users', ()=>{
    console.log("Users Created.")
})