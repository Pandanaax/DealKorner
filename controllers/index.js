module.exports = (app) => {
    app.controllers = {
        theme: require("./theme.js")(app),
        deal: require("./deal")(app),
        user: require("./users")(app),
    };
}