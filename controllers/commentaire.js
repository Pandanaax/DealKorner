module.exports = (app) => {
    const theme = app.models.Commentaire;
    
    function getAll(req, res) {
        theme.find({}, function (err, docs) {
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
    theme.findById(msg, function(err,docs) {
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
    theme.create(msg, function(err,docs) {
        if(err){
            console.log(err);
            
        }else{
            res.send("Titre du commentaire");
        }
    });
}

//CONTENU DU COMMENTAIRE
function create(req, res) {
    let msg = req.body;
    theme.create(msg, function(err,docs) {
        if(err){
            console.log(err);
            
        }else{
            res.send("Contenu du commentaire");
        }
    });
}


// DATE DU COMMENTAIRE
function create(req, res) {
    let msg =req.body;
    theme.create(msg, function(err,docs) {
        if(err){
            console.log(err);
            
        }else{
            res.send("Date commentaire");
        }
    });
}




// USER QUI A ENVOYE LE COM
function create(req, res) {
    let msg =req.body;
    theme.create(msg, function(err,docs) {
        if(err){
            console.log(err);
            
        }else{
            res.send("User");
        }
    });
}

return {getAll,getById,create};
};