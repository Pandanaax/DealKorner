module.exports = (app) => {
    const commentaire = app.models.Commentaire;
    
    function getAll(req, res) {
        commentaire.find({}, function (err, docs) {
            if(err){
                console.log(err);
                }else{
                    res.send(docs)
                }
            }); 
        }

//ID DU COMMENTAIRE
function getById(req, res) {
    let msg = req.body.id;
    commentaire.findById(msg, function(err,docs) {
        if(err){
            console.log(err);
            
        }else{
            res.send("l'id " + msg + " a bien été identifé");
        }
    });
}


// TITRE DU COMMENTAIRE
function create(req, res) {
    let msg =req.body;
    commentaire.insertMany(msg, function(err,msg) {
        if(err){
            console.log(err);
            
        }else{
            res.send(msg);
        }
    });
}

return {getAll,getById,create};
};