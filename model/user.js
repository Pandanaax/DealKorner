const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var userSchema = new Schema({

    pseudo: String,
    email : String,
    password: String,
    urlPhoto : [String],
    dealPoste: [ {
        type: Schema.Types.ObjectId,
        ref: "Deal"
    },
    ]
    
});



module.exports = mongoose.model("User", userSchema);