module.exports = (app) => {
    const Deal = app.models.Deal;
    
    function getAll(req, res) {
        Deal.find({}, function (err, docs) {
            if(err){
                console.log(err);
                }else{
                    res.send(docs)
                }
            }); 
        }
    function create(req, res) {
        const firstDeal = req.body;
        
            Deal.create(firstDeal, function(err, firstDeal){
                if(err){
                    console.log(err)
                }else{
                    res.send(firstDeal);
                }
            })
        }
    function createAll(req, res) {
        const nouveauDeal = req.body;
        
            Deal.insertMany(nouveauDeal, function(err, nouveauDeal){
                if(err){
                    console.log(err)
                }else{
                    res.send(nouveauDeal);
                }
            })
        }
        
    function addCommentaire(req, res) {
        Deal.update(req.body.id, function(err, docs){
            if(err){
                res.send(err + "une erreur a été produite");
            }else{
                res.send(docs + "le commentaire à bien été ajouter");
            }
        });
    }    

    function incVoteDeal(req,res) {
        Deal.update({"_id":req.body.id},{ $inc: {vote : 1}}, function(err,vote){
        if(err){
            res.send(err + "une erreur a été produite");
        }else{
            res.send(vote + "le vote à bien été ajouter");
        }
    })
}

    function decVoteDeal(req,res) {
        Deal.update({"_id":req.body.id},{ $inc: {vote : -1}}, function(err,vote){
         if(err){
            res.send(err + "une erreur a été produite");
         }else{
            res.send(vote + "le vote à bien été ajouter");
        }
    })
}

        return { getAll , create, createAll, addCommentaire, incVoteDeal, decVoteDeal }; 

};