const router = require("express").Router();

module.exports = (app) => {
    router.get("/", app.controllers.deal.getAll)
    
<<<<<<< HEAD
    //router.post("/create", app.controllers.deal.create);
=======
    router.post("/create", app.controllers.deal.create);
>>>>>>> b2b65b99604d352065ddf4264e58b4eef9d995a7

    return router;
  };