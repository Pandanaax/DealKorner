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

    function connect(req, res) {
        User.findOne({email: req.body.email}, function(err, user) {
            if (err) throw err;
            if (!req.body.email) {
              res.status(401).json({ message: "Impossible de se connecter. Mauvais email." });
            } else if (user) {
              if (!req.body.password) {
                res.status(401).json({ message: 'Impossible de se connecter. Mauvais mot de passe.' });
              } else {
                return res.json({token: jwt.sign({ email: user.email, id: user.id}, 'Cacher')});
              }
            }
          });
        };
    return {getAll,create,createAll,connect};
}