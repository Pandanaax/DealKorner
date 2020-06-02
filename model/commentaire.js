const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var commentaireSchema = new Schema({
    title: String,
    contenu: String,
    dateCommentaire: Date,
    User: [ {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    ]
});



module.exports = mongoose.model("commentaire", commentaireSchema);