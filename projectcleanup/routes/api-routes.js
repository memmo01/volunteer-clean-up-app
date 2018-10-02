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
          originUuid: results[0].dataValues.uuid,
          newUuid: uuidv4()
        };

        res.json(o);
      });
  });

  // testing retrieving info from LOGINCREDENTIALS DB
  app.get("/api/userfind/:id?", (req, res) => {
    console.log(req.params.id);
    db.users
      .findAll({
        where: {
          uuid: req.params.id
        }
      })
      .then(results => {
        res.json(JSON.stringify(results[0]));
        console.log(JSON.stringify(results[0]));
      });
  });

  // testing retrieving info from EVENTS DB
  app.get("/api/events", (req, res) => {
    db.events.findAll({}).then(results => {
      res.json(results);
    });
  });

  app.get("/api/attendingEvents/:userId?", (req, res) => {
    console.log(req.params.userId);
    db.events
      .findAll({
        where: {
          user_id: req.params.userId
        }
      })
      .then(results => {
        res.json(JSON.stringify(results[0]));
      });
  });

  //finding user with an id and adding a unique identifier to the database
  app.post("/api/updateCred", function(req, res) {
    let obj = JSON.parse(req.body);
    let idNum = obj.id;
    let uuidNum = obj.uuid;

    db.users
      .update(
        {
          uuid: uuidNum
        },
        {
          where: {
            uuid: idNum
          }
        }
      )
      .then(function(results) {
        res.json(results);
      })
      .then(function(req, res) {
        db.logincreds.update(
          {
            uuid: uuidNum
          },
          {
            where: {
              uuid: idNum
            }
          }
        );
      })
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
  app.post("/api/newInfo/personalInfo", function(req, res) {
    db.users.create(req.body).then(results => {
      res.json(results);
    });
  });
  //add the personalInfo database
  app.post("/api/login", function(req, res) {
    // db.users.create(req.body).then(results => {
    //   res.json(results);
    // });
  });
  app.post("/api/newInfo/confidencialInfo", function(req, res) {
    db.logincreds.create(req.body).then(results => {
      res.json(results);
    });
  });
};
