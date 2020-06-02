const router = require("express").Router();

module.exports = (app) => {
    router.get("/", app.controllers.theme.getAll)
    
    //router.post("/id", app.controllers.theme.getById);

    return router;
  };