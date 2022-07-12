const express = require("express");
const router = require("express").Router();
router.use( express.static("public") );



router.get("/page_01", (req, res) => {
  res.render("page_01",{res});
})
router.get("/page_01_food", (req, res) => {
  res.render("page_01_food.ejs",{res});
})
router.get("/page_01_scape", (req, res) => {
  res.render("page_01_scape",{res});
})
router.get("/page_01_culture", (req, res) => {
  res.render("page_01_culture",{res});
})
router.get("/page_01_anime", (req, res) => {
  res.render("page_01_anime",{res});
})



module.exports = router;