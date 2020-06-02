const router = require("express").Router();

module.exports = (app) => {
    router.get("/", app.controllers.deal.getAll)
    
    router.post("/create", app.controllers.deal.create);

    router.post("/createAll", app.controllers.deal.createAll);

    router.post("/update", app.controllers.deal.addCommentaire);
    
    router.post("/updateOne", app.controllers.deal.voteDeal);

    return router;
  };