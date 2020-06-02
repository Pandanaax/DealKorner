module.exports = (app) => {
    app.get('/',(req,res) => {
        res.send("hello word");
    })
    
    app.use("/deal", require("./deal")(app));
    app.use("/theme", require("./theme")(app));
<<<<<<< HEAD
    app.use("/users", require("./users")(app));
=======
    app.use("/user", require("./user")(app));
    app.use("/commentaire", require("./commentaire")(app));
>>>>>>> b2b65b99604d352065ddf4264e58b4eef9d995a7
};


