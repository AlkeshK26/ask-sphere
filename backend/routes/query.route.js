const express = require('express');
const query_controller = require("../controllers/query.controller");
const upload = require("../middlewares/query.mw");
const ensureAuthenticated = require("../middlewares/auth.mw");

// const router = express.Router();

// router.post("/postquerry", querry_controller.postQuerry);
// router.get("/allquerry", querry_controller.getAllQuerry);
// router.get("/:querryId", querry_controller.getQuerrybyId);

// module.exports = router;

module.exports = (app) =>{
    app.post("/askSphere/api/v1/queries/postQuery", ensureAuthenticated , upload.single("image"), query_controller.postQuery);
    app.get("/askSphere/api/v1/queries/getQueries",query_controller.getAllQueries);

    app.get("/askSphere/api/v1/queries/getQueryById/:queryId",query_controller.getQueryById);
};