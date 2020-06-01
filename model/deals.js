const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var dealsSchema = new Schema({
    title: String,
    urlPhoto : [String],
    description : String, 
    commentaires : commentaires,
    lienRedirection : String,
    theme : theme,
    vote : Interger,
    dateDeal : Date
    
    
});



module.exports = mongoose.model("deals", dealsSchema);