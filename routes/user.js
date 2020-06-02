const router = require("express").Router();

module.exports = (app) => {
    router.get("/", app.controllers.user.getAll)
    
    router.post("/create", app.controllers.user.create);
    router.post("/createAll", app.controllers.user.createAll);

    return router;
  };