module.exports = (app) => {
    app.controllers = {
        deals: require("./deals")(app),
    };
}