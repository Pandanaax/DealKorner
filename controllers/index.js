module.exports = (app) => {
    app.controllers = {
        deals: require("./deals")(app),
        theme: require("./theme.js")(app),
    };
}