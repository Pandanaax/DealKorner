const router = require("express").Router();

module.exports = (app) => {
    router.get("/", app.controllers.deal.getAll)
    
    router.post("/create", app.controllers.deal.create);

    return router;
  };