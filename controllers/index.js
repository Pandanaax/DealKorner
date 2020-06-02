module.exports = (app) => {
    app.controllers = {
        theme: require("./theme.js")(app),
        deal: require("./deal")(app),
        user: require("./user")(app),
        commentaire: require("./commentaire")(app)
    };
}