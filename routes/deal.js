const router = require("express").Router();
var jwt = require('jsonwebtoken');
const SECRET = '123456';
const JAVA_JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pa2thQG1haWwuY29tIiwiaWF0IjoxNTkxMjAzODk2fQ.1FY0_I1UluPruSWaZhaY4ybTDnltU488aIRubBaOJ2w';


function authenticateToken(req, res, next) {
 
  console.log(req.headers['authorization']);

     jwt.verify(JAVA_JWT, SECRET, function(err, decoded) {
     if(decoded){
       next();
     } else{
       res.send(err);
     }
    });
}


module.exports = (app) => {
    router.get("/", authenticateToken, app.controllers.deal.getAll)
    
    router.post("/create", app.controllers.deal.create);

    router.post("/createAll", app.controllers.deal.createAll);

    router.post("/update", app.controllers.deal.addCommentaire);
    
    router.post("/updateIncVote", app.controllers.deal.incVoteDeal);

    router.post("/updateDecVote", app.controllers.deal.decVoteDeal);

    router.post("/getByTheme", app.controllers.deal.getByTheme);

    return router;
  };