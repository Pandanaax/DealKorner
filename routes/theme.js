const router = require("express").Router();

module.exports = (app) => {
    router.get("/", app.controllers.deals.getAll)
    
    router.post("/id", app.controllers.deals.getById);

    return router;
  };