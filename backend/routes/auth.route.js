const authController = require("../controllers/auth.controller")
const authMw = require("../middlewares/auth.mw")

module.exports = (app) => {
    app.post("/askSphere/api/v1/auth/signup",authController.signup);
    app.post("/askSphere/api/v1/auth/login", authController.login);
}