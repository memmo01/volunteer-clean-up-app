let Sequelize = require("sequelize");
let db = require("../models");
let uuidv4 = require("uuid/v4");

module.exports = app => {
  // testing retrieving info from users DB
  app.get("/api/users/:user?/:password?", (req, res) => {
    db.logincreds
      .findAll({
        where: {
          username: req.params.user,
          password: req.params.password
        }
      })
      .then(results => {
        let o = {
          one: results[0].dataValues.user_id,
          uuid: uuidv4()
        };

        res.json(o);
      });
  });

  // testing retrieving info from LOGINCREDENTIALS DB
  app.get("/api/userfind/:id?", (req, res) => {
    db.users
      .findAll({
        where: {
          uuid: req.params.id
        }
      })
      .then(results => {
        res.json(results[0].dataValues);
      });
  });

  // testing retrieving info from EVENTS DB
  app.get("/api/events", (req, res) => {
    db.events.findAll({}).then(results => {
      res.json(results);
    });
  });

  //add the personalInfo database
  app.post("/api/login", function(req, res) {
    // db.users.create(req.body).then(results => {
    //   res.json(results);
    // });
  });

  //finding user with an id and adding a unique identifier to the database
  app.post("/api/updateCred", function(req, res) {
    let obj = JSON.parse(req.body);
    let idNum = parseInt(obj.id);
    let uuidNum = obj.uuid;

    db.users
      .update(
        {
          uuid: uuidNum
        },
        {
          where: {
            id: idNum
          }
        }
      )
      .then(function(results) {
        res.json(results);
      });
  });

  //add to addEvent database
  app.post("/api/newInfo/addEvent", function(req, res) {
    db.events.create(req.body).then(results => {
      res.json(results);
    });
  });
};
