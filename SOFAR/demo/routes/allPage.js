const express = require("express");
const router = require("express").Router();
router.use( express.static("public") );



router.get("/page_01", (req, res) => {
  res.render("page_01");
})
router.get("/page_01_food", (req, res) => {
  res.render("page_01_food.ejs");
})
router.get("/page_01_scape", (req, res) => {
  res.render("page_01_scape");
})
router.get("/page_01_culture", (req, res) => {
  res.render("page_01_culture");
})
router.get("/page_01_anime", (req, res) => {
  res.render("page_01_anime");
})



module.exports = router;