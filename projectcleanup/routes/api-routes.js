let Sequelize = require("sequelize");
let db = require("../models");

module.exports = app => {
  // testing retrieving info from users DB
  app.get("/api/users", (req, res) => {
    db.users.findAll({}).then(results => {
      res.json(results);
    });
  });

  // testing retrieving info from LOGINCREDENTIALS DB
  app.get("/api/logincred", (req, res) => {
    db.logincreds.findAll({}).then(results => {
      res.json(results);
    });
  });

  // testing retrieving info from EVENTS DB
  app.get("/api/events", (req, res) => {
    db.events.findAll({}).then(results => {
      res.json(results);
    });
  });

  app.post("/api/newInfo/personalInfo", function(req, res) {
    db.users.create(req.body).then(results => {
      res.json(results);
    });
  });

  app.post("/api/newInfo/addEvent",function(req,res){
    db.events.create(req.body).then(results)=>{
      res.json(results)
    }
  });
};
