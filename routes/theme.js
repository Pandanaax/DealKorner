const router = require("express").Router();

module.exports = (app) => {
    router.get("/", app.controllers.theme.getAll)
    
<<<<<<< HEAD
    //router.post("/id", app.controllers.theme.getById);
=======
    router.post("/id", app.controllers.theme.getById);
>>>>>>> b2b65b99604d352065ddf4264e58b4eef9d995a7

    return router;
  };