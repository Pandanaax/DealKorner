const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var dealSchema = new Schema({
    title: String,
    urlPhoto : [String],
    description : String, 
<<<<<<< HEAD
    //commentaires : commentaires,
=======
    // commentaires : commentaires,
>>>>>>> b2b65b99604d352065ddf4264e58b4eef9d995a7
    lienRedirection : String,
    theme : [ {
        type: Schema.Types.ObjectId,
        ref: "Theme"
    }
    ],
<<<<<<< HEAD
    vote: Number,
=======
    vote : Integer,
>>>>>>> b2b65b99604d352065ddf4264e58b4eef9d995a7
    dateDeal : Date
    
    
});



module.exports = mongoose.model("deal", dealSchema);