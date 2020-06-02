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
        return { getAll  }; 
};