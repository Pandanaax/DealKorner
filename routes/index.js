module.exports = (app) => {
    app.get('/',(req,res) => {
        res.send("hello word");
    })
    
    app.use("/deals", require("./deals")(app));
    app.use("/users", require("./users")(app));
};
