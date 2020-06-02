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
        const premierDeal = req.body;
        const deuxiemeDeal = req.body;
        const troisiemeDeal = req.body
            Deal.create(premierDeal,deuxiemeDeal,troisiemeDeal, function(err, nouveauDeal, deuxiemeDeal, troisiemeDeal){
                if(err){
                    console.log(err)
                }else{
                    res.send(premierDeal, deuxiemeDeal, troisiemeDeal);
                }
            })
        }
        return { getAll , create }; 
};