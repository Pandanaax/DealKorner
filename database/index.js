const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://localhost:27017/dealKorner",
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    },
    (err) => {
        if(err){
        console.log(err);
    } else {
        console.log("Connexion à la base réussi");
        }
    }
)
