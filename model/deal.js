const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var dealSchema = new Schema({
    title: String,
    urlPhoto : [String],
    description : String, 
    commentaires : [ {
        type: Schema.Types.ObjectId,
        ref: "commentaire"
    },
    ],
    lienRedirection : String,
    theme : [ {
        type: Schema.Types.ObjectId,
        ref: "Theme"
    },
    ],
    vote : Integer,
    dateDeal : Date
    
    
});



module.exports = mongoose.model("deal", dealSchema);