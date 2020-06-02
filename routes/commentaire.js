const router = require("express").Router();

module.exports = (app) => {
    router.get("/", app.controllers.commentaire.getAll);
    router.post("/getById", app.controllers.commentaire.getById);
    router.post("/create", app.controllers.commentaire.create);
    

    return router;
  };