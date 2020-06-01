module.exports = (app) => {
    const Deals = app.models.Deals;
    
    function getAll(req, res) {
        Deals.find({}, function (err, docs) {
            if(err){
                console.log(err);
                }else{
                    res.send(docs)
                }
            }); 
        }
        return { getAll  }; 
};