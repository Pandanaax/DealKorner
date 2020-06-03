const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");

require("./database")(app);

require("./model")(app);

var bodyParser = require('body-parser');
app.use(bodyParser.json());

require("./controllers")(app);

require("./routes")(app);

app.listen(port, () => console.log(`Example app listening on port port!`))

