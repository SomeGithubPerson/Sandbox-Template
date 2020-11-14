let sqlite3 = require('sqlite3').verbose();
const path = require('path');
const { cwd } = require('process');
console.log(`pls work`)
let db = new sqlite3.Database(`${__dirname}/database/sandbox_db.db`, sqlite3.OPEN_READWRITE);
console.log("Db Opened. Proceeding to generate tables and rows...")

db.run(`CREATE TABLE Users_Sand(
    UserID varchar(255),
    Username varchar(255),
    Email varchar(255),
    userPass varchar(255),);`)
console.log("done?")