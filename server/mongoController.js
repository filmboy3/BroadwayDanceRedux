const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cred = new Schema({
  password: String,
  
})

const controllerMongo = {};

controllerMongo.getDatabase = (req, res, next) => {
  let url = "mongodb://admin:admindance1@ds139262.mlab.com:39262/broadwaydance";
  let password = req.query.password;
  let dbConn = mongoose.createConnection(url, 
    { useNewUrlParser: true });
  dbConn.on("open", () => {
    console.log("Got inside the DB...");
    const coll = dbConn.db.listCollections().toArray();
    res.send(JSON.stringify("TEST"));
  });
};

module.exports = controllerMongo;