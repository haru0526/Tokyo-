const express = require("express");
const router = require("express").Router();
// router.use( express.static("public") );


router.get("/home", (req, res) => {
  res.render("OM_Home.ejs");
})
router.get("/horse1", (req, res) => {
  res.render("horse1.ejs");
})
router.get("/horse2", (req, res) => {
  res.render("horse2.ejs");
})
router.get("/nightclub1", (req, res) => {
  res.render("nightclub1.ejs");
})
router.get("/nightclub2", (req, res) => {
  res.render("nightclub2.ejs");
})
router.get("/nightclub3", (req, res) => {
  res.render("nightclub3.ejs");
})




module.exports = router;