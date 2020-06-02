const router = require("express").Router();

module.exports = (app) => {
    router.get("/", app.controllers.deals.getAll)
    
    router.post("/create", app.controllers.users.create);

    return router;
  };