const router = require("express").Router();

module.exports = (app) => {
    router.get("/", app.controllers.users.getAll)
    
    //router.post("/create", app.controllers.users.create);

    return router;
  };