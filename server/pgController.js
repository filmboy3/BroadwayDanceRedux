

const pgPromise = require('pg-promise');
const pgp = pgPromise({ capSQL: true });
const db = pgp('postgres://tnliuhzl:d8OcuFX0WtQRhoC6uLOlLuQaOOeoWCMP@baasu.db.elephantsql.com:5432/tnliuhzl');

//expire a connection after an hour (runs each 20min)
let connections = {};
setInterval(() => {
  for (key in connections) {
    if (Date.now() > (connections[key]['loginTime'] + 3600000)) delete connections[key];
  }
}, 1200000)

module.exports = {
  chatAdminLogin(req, res) {
    console.log("chatAdminLogin triggered.");
    db.any(`SELECT chat FROM "public"."chat" where password = '${req.query.pword}';`)
    .then(data => {
      console.log("Data pre Update:", data);
      if (data[0].chat !== true) {
        return db.any(`UPDATE "public"."chat"
        SET chat = true RETURNING chat;`);
        // console.log("Updated from false to true"); 
      } else {
        return db.any(`UPDATE "public"."chat"
        SET chat = false RETURNING chat;`);
        // console.log("Updated from true to false");
      }
    })
    .then(data => {
        console.log("Completed Toggle with data: ", data);
        res.send(JSON.stringify(data[0].chat));
      })
    .catch((err) => console.log('getChatError', err));
  }
}