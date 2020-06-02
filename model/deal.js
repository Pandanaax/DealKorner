const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var dealSchema = new Schema({
    title: String,
    urlPhoto : [String],
    description : String, 
<<<<<<< HEAD
<<<<<<< HEAD
    //commentaires : commentaires,
=======
    // commentaires : commentaires,
>>>>>>> b2b65b99604d352065ddf4264e58b4eef9d995a7
=======
    commentaires : [ {
        type: Schema.Types.ObjectId,
        ref: "commentaire"
    },
    ],
>>>>>>> f7e128be8ad6e32336f989bea29f4b75d836e273
    lienRedirection : String,
    theme : [ {
        type: Schema.Types.ObjectId,
        ref: "Theme"
    }
    ],
<<<<<<< HEAD
    vote : Number,
=======
<<<<<<< HEAD
    vote: Number,
=======
    vote : Integer,
>>>>>>> b2b65b99604d352065ddf4264e58b4eef9d995a7
>>>>>>> 1ce7f3c4bea5ba23b2634a430368b36d51e9bc3b
    dateDeal : Date
    
    
});



module.exports = mongoose.model("deal", dealSchema);