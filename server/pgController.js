

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
  adminLogin(req, res) {
    db.any(`SELECT chat FROM chat where password = '${req.query.pword}';`)
    .then(data => {
      if (data.length === 0) {
        res.json({result: "Incorrect Login"});
      } else {
        res.json({result: "success"});
      }
      console.log("Correct Login", data); 
    })
    .catch((err) => res.json({result: "error"}));
  },

  toggleChat(req, res) {
    db.any(`SELECT chat FROM chat where password = '${req.query.pword}';`)
    .then(data => {
      console.log("Data pre Update:", data);
      if (data[0].chat !== true) {
        return db.any(`UPDATE chat
        SET chat = true RETURNING chat;`);
      } else {
        return db.any(`UPDATE chat
        SET chat = false RETURNING chat;`);
      }
    })
    .then(data => {
        console.log("Completed Toggle with data: ", data);
        res.send(JSON.stringify(data[0].chat));
      })
    .catch((err) => console.log('getChatError', err));
  },
  chatCheck(req, res) {
    return db.any(`SELECT chat, guestnum FROM chat`)
    .then(data => {
      res.send(JSON.stringify(data[0]))
    })
    .catch((err) => console.log('chatCheckError', err));
  },
  adminChangePassword(req, res) {
      if (req.body.newpword1 !== req.body.newpword2) {
        res.json({error: "Passwords do not match"});
      }
    return db.any(`UPDATE chat
        SET password = '${req.body.newpword1}' where password = '${req.body.oldpword}' RETURNING password;`)
    .then(data => {
      res.json({success: "Successfully Updated Password"});
    })
    .catch((err) =>  res.json({error: "Error Changing Password"})
    );
  },

}