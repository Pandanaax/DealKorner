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
        return { getAll  }; 
};

//RECUPERATION DE L'ID
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
return {getById};