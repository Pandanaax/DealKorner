const express = require("express");
const app = express();
const port = 3000;
const mangoose = require("mongoose");

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Exemple app listening on port port !`)); 


require("./model")(app);

var bodyParser = require('body-parser');
app.use(bodyParser.json());

require("./controllers")(app);

require("./routes")(app);

app.listen(port, () => console.log(`Example app listening on port port!`))
