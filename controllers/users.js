module.exports = (app) => {
    const user = app.models.User;
    
    function getAll(req, res) {
        User.find({}, function (err, docs) {
            if(err){
                console.log(err);
                }else{
                    res.send(docs)
                }
            }); 
        }
        return {getAll}; 
};