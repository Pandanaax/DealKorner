module.exports = (app) => {
    app.controllers = {
        deal: require("./deal")(app),
    };
}