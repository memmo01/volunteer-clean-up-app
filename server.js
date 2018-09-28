const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./projectcleanup/models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./projectcleanup/routes/api-routes.js")(app);
const Port = 5000;

db.sequelize.sync().then(() => {
  app.listen(Port, () => console.log(`Server running on ${Port}`));
});
// app.listen(Port, () => console.log(`Server listening on port ${Port}`));
