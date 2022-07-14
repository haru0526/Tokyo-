const express = require("express");
var bp = require("body-parser");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const cookie =require("cookie-parser");
const session = require('express-session');
const flash = require("connect-flash");
const authRouter = require("./routes").auth;
const pageRoute = require("./routes").pageRoute;
const onlyMemberRoute = require("./routes").onlyMemberRoute;




var app = express();
app.use('/public', express.static('public'));
app.set("view engine", "ejs");
app.use(cookie());
app.use(bp.json());
app.use(bp.urlencoded({extended: true}));
app.use(cors());
app.use(session({ secret: 'cats',name: 'user', resave: true, saveUninitialized: false }));

app.use(flash());
app.use((req, res, next ) => {
  res.locals = {
    isLogin: req.session.isLogin,
    userName: req.session.user,
    userId: req.session.userId, 
  };
  
  
  // res.locals.isLogin = req.session.isLogin;
  // res.locals.userName = req.session.user;
  // res.locals.userName = "shawn";
  // res.locals.userId = req.session.userId;
  next();
})





app.get("/", (req, res) => {
  res.render("index.ejs",{res});
})
app.get("/navbar", (req, res) => {
  res.render("navbar.ejs",{res});
})
app.use("/member",authRouter);
app.use("/allPage",pageRoute);
app.use("/onlyMember",onlyMemberRoute);


app.get("/monthThree", (req, res) => {
  res.render("month3.ejs",{res});
})
app.get("/waterpage", (req, res) => {
  res.render("waterpage.ejs",{res});
})
app.get("/area", (req, res) => {
  res.render("area.ejs",{res});
})
app.get("/east", (req, res) => {
  res.render("east.ejs",{res});
})
app.get("/northern", (req, res) => {
  res.render("northern.ejs",{res});
})
app.get("/shibuya", (req, res) => {
  res.render("shibuya.ejs",{res});
})
app.get("/south", (req, res) => {
  res.render("south.ejs",{res});
})
app.get("/forgotPassword", (req, res) => {
  res.render("forgotPassword.ejs",{res});
})




app.listen(3000, () => {
  console.log("server 3000........");
});