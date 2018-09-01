const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// require("./client/src/routes/api-routes.js")(app);
const Port = 5000;

app.listen(Port, () => console.log(`Server listening on port ${Port}`));
