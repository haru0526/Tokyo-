const express = require("express");
var bp = require("body-parser");
var cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const cookie =require("cookie-parser");
const session = require('express-session');
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

app.use((req, res, next ) => {
  res.locals.isLogin = req.session.isLogin;
  res.locals.userName = req.session.user;
  next();
})





app.use("/member",authRouter);
app.use("/allPage",pageRoute);
app.use("/onlyMember",onlyMemberRoute);


app.get("/", (req, res) => {
  res.render("index.ejs",{});
})




app.listen(3000, () => {
  console.log("server 3000........");
});