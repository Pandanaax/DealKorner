const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var themeSchema = new Schema({
    nom : String,
    
    
});



module.exports = mongoose.model("theme", themeSchema);