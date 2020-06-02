module.exports = (app) => {
    const User = app.models.User;

    function getAll(req, res) {
        User.find({}, function (err, docs) {
            if(err){
                console.log(err);
                }else{
                    res.send(docs)
                }
            }); 
        }
    function create(req, res) {
        let newUser =req.body;
            User.create(newUser, function(err,docs) {
                if(err){
                    res.send(err);
                }else{
                    res.send("Le user a bien été crée");
                }
            });
        }
    function createAll(req, res){    
    User.insertMany(req.body, function(err,docs) {
        if(err){
            res.send(err);
        }else{
            res.send("Les users ont bien été crées");
        }
          });
    }
    return {getAll,create,createAll}; 
}