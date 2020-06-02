const router = require("express").Router();

module.exports = (app) => {
    router.get("/", app.controllers.deal.getAll)
    
    router.post("/create", app.controllers.deal.create);

    router.post("/update", app.controllers.deal.update);

    return router;
  };