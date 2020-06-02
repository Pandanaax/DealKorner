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
        const nouveauDeal = req.body;
        
            Deal.insertMany(nouveauDeal, function(err, nouveauDeal){
                if(err){
                    console.log(err)
                }else{
                    res.send(nouveauDeal);
                }
            })
        }

        function update(req, res) {
            Deal.addCommentaire(req.body.id, function(err, docs){
                if(err){
                    res.send(err + "une erreur a été produite");
                }else{
                    res.send(docs + "le commentaie à bien été ajouter");
                }
            });
        }    
        return { getAll , create, update }; 
};