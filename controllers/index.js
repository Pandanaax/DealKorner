module.exports = (app) => {
    app.controllers = {
        deal: require("./deal")(app),
        user: require("./users")(app),
    };
}