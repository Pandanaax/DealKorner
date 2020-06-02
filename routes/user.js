const router = require("express").Router();

module.exports = (app) => {
    router.get("/", app.controllers.user.getAll)
    
    // router.post("/create", app.controllers.user.create);

    return router;
  };