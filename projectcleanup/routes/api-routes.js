let Sequelize = require("sequelize");
let db = require("../models");

module.exports = app => {
  app.get("/api/users", (req, res) => {
    db.users.findAll({}).then(results => {
      res.json(results);
    });
  });

  app.get("/api/logincred", (req, res) => {
    db.logincreds.findAll({}).then(results => {
      res.json(results);
    });
  });
  app.get("/api/events", (req, res) => {
    db.events.findAll({}).then(results => {
      res.json(results);
    });
  });
};
