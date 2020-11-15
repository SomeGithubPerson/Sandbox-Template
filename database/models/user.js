const db = require('better-sqlite3')(__dirname + '/../sandbox_db.db');

function getUserCurrency(username){
    userCur1 = db.prepare(`SELECT currency FROM users
    WHERE username LIKE ?;`);
    stat2 = userCur1.get(username)
    return stat2.Currency


}
function getUserId(username){
    userCur1 = db.prepare(`SELECT userid FROM users
    WHERE username LIKE ?;`);
    stat2 = userCur1.get(username)
    return stat2.userid;
 
}

function getUserPosts(username){

}

function isAdmin(username){
    userCur1 = db.prepare(`SELECT Admin FROM users
    WHERE username LIKE ?;`);
    stat2 = userCur1.get(username)
    return stat2.Admin === 1 ? true : false;
}

module.exports = {
    isAdmin: isAdmin,
    userPosts: getUserPosts,
    userId: getUserId,
    currency: getUserCurrency
}