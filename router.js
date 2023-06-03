const express = require("express");
const router = express.Router();
const memberController = require("./controllers/memberController")


/****************
 *   REST API   *
****************/


// Routers related to member
router.post("/signup", memberController.signup)
router.post("/login", memberController.login)
router.get("/logout", memberController.logout)


// other routers
router.get("/menu", (req, res) => {
    res.send("Menu sahifasidasiz!");
})

router.get("/jamiyat", (req, res) => {
    res.send("Jamiyat Sahifasidasiz!");
})

module.exports = router;