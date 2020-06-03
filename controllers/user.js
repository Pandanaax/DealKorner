module.exports = (app) => {
    const User = app.models.User;
    const jwt = require('jsonwebtoken');
    const bcrypt = require('bcrypt');

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
        const saltRounds = 10;
        const Password = req.body.password;
        bcrypt.hash(Password, saltRounds, function(err, hash) {
            if(err){
                res.send(err);
            }else{
                let passwordHash = hash;
                let newUser = {
                    pseudo: req.body.pseudo,
                    email : req.body.email,
                    password: passwordHash,
                    urlPhoto : req.body.urlPhoto,
                };

                    User.create(newUser, function(err,docs) {
                        if(err){
                            res.send(err);
                        }else{
                            res.send("Le user a bien été crée");
                             }
                    });
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
        if (req.body.email) {

            if (req.body.password) {
                User.findOne({
                    email: req.body.email
                }, function (err, user) {
                    if (err) {
                        res.send(err + "Une erreur technique est survenue");
                    }
                    if (!user) {
                        res.status(401).json({
                            message: "Impossible de se connecter. Mauvais email."
                        })
                    } else {
                            let password = req.body.password;

                            bcrypt.compare(password, user.password, function (err, result) {
                                if (result) {
                                    res.json({
                                        token: jwt.sign({
                                            email: user.email,

                                        }, 'Cacher')
                                    });
                                } else {
                                    res.send(err + "Le mot de passe ne correspond pas");
                                }
                            });
                        }
                    }
                );
            } else {
                res.send("Aucun mot de passe");
            }

        } else {
            res.send("Aucun mail");
        }
    };
    return {getAll,create,createAll,connect};
}