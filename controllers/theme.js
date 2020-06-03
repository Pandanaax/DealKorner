module.exports = (app) => {
    const theme = app.models.Theme;
    
    function getAll(req, res) {
        theme.find({}, function (err, docs) {
            if(err){
                console.log(err);
                }else{
                    res.send(docs)
                }
            }); 
        }

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

function create(req, res) {
    let msg =req.body;
    theme.create(msg, function(err,docs) {
        if(err){
            console.log(err);
            
        }else{
            res.send("Le thème a bien été crée");
        }
    });
}


return {getAll,getById,create};
};
