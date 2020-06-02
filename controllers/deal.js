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
        return { getAll , create }; 
};