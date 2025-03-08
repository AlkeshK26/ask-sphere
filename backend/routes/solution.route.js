const express = require("express");
const solution_controller = require("../controllers/solution.contoller");
const upload = require("../middlewares/solution.mw");
const ensureAuthenticated = require("../middlewares/auth.mw");
//const router = express.Router();

// router.post("/post", upload.single("image"), postSolution);
// router.get("/:queryId", getSolution);

// module.exports = router;

module.exports = (app) =>{
    app.post("/askSphere/api/v1/solutions/postSolution", ensureAuthenticated, upload.single("image"), solution_controller.postSolution);
    app.get("/askSphere/api/v1/solutions/getSolutions/:queryId",solution_controller.getSolutions);
};