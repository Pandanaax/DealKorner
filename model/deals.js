const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var dealsSchema = new Schema({
    title: String,
    urlPhoto : String[],
    description : String, 
    
    
});



module.exports = mongoose.model("deals", dealsSchema);