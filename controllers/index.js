module.exports = (app) => {
    app.controllers = {
<<<<<<< HEAD
        deals: require("./deals")(app),
        theme: require("./theme.js")(app),
=======
        deal: require("./deal")(app),
>>>>>>> 0be86361d0b87e8a8895ea5c4a4510eb066fda9e
    };
}