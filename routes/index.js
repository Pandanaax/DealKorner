module.exports = (app) => {
    app.get('/',(req,res) => {
        res.send("hello word");
    })
    
    app.use("/deal", require("./deal")(app));
    app.use("/theme", require("./theme")(app));
};
