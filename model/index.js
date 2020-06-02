module.exports = (app) => {
    app.models = {
        Deal : require("./deal.js"),
        User : require("./user.js"),
        Theme : require("./theme.js")
    };
}
