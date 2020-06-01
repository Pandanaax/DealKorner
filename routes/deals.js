const router = require("express").Router();

module.exports = (app) => {
    router.get("/", app.controllers.deals.getAll)
    
    router.post("/create", app.controllers.deals.create);

    return router;
  };