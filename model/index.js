module.exports = (app) => {
    app.models = {
        Deal : require("./deal.js"),
        User : require("./user.js"),
        Commentaire : require("./commentaire"),
        Theme : require("./theme.js"),
        
    };
}
