const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Home Sahifadasiz");
})

router.get("/menu", (req, res) => {
    res.send("Menu sahifasidasiz!");
})

router.get("/jamiyat", (req, res) => {
    res.send("Jamiyat Sahifasidasiz!");
})

module.exports = router;