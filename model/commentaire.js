const mongoose = require("mongoose");

var Schema = mongoose.Schema;

var comSchema = new Schema({
    id: Integer,
    title: String,
    contenu: String,
    dateCommentaire: Date,
    //user: User
});



module.exports = mongoose.model("commentaire", comSchema);