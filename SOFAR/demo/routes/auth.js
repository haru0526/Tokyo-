const router = require("express").Router();
const express = require("express");
var app = express();
// var createError = require('http-errors');
var path = require('path');
var randtoken = require('rand-token');
var nodemailer = require('nodemailer');
var cookieParser = require('cookie-parser');
// var logger = require('morgan');
var flash = require('express-flash');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var cors = require("cors");
var db = require("../db");
var bp = require("body-parser");
const cookie =require("cookie-parser");
const { stringify } = require("querystring");
const dotenv = require("dotenv");
dotenv.config();
const session = require('express-session');
const passport = require('passport');
require('../passport');
const {isLoggedIn} = require("../loggined");


app.set('view engine', 'ejs');
router.use( express.static("public") );
router.use(cookie());
router.use(bp.json());
router.use(bp.urlencoded({extended: true}));
router.use(cors());
router.use(session({ secret: 'cats',name: 'user', resave: true, saveUninitialized: false }));
router.use(passport.initialize());
router.use(passport.session());


// var passport = require('passport');
// require('../passport');
// var userProfile;
// app.use(passport.initialize());
// app.use(passport.session());




//----------- check JETtoken ----------
// router.use((req, res, next) => {
//   console.log(" comming to auth.js...........");
//   if(!req.cookies.userRegistered || !req.session.user){
//     req.cookies.userRegistered = "Guest";
//     console.log(req.cookies.userRegistered)
//     // req.session.user = "Guest";
//     next();
//   }
// })

// app.use((req, res, next ) => {
//   res.locals.isLogin = req.session.isLogin;
//   next();
// })
// function isLoggedIn(req, res, next) {
//   if (req.user || req.session.user) {
//     console.log('authenticated')
//     next()
//   } else {
//     console.log('not authenticated')
//     return res.redirect("/");
//   }

//   next()
// }


// router.get("/", (req, res) => {
//   res.render("index.ejs",{});
// })



//----------- register ----------
router.get("/register", (req, res) => {
  var err_msg = req.flash("err_msg");
  res.render("register.ejs", {res, err_msg});
})

router.post("/register", (req, res) => {
  const {name, email, password, confirmPassword} = req.body;
  //check enter email or password or not
  if(!email || !password){
    return res.json({ status: "error", error: "Please enter your email and password"});
  } 

  db.exec(`SELECT email FROM users WHERE email = ?`, [email], (result, fields) => {

    
    if(result[0]){
      // return res.json({status: "error", error:"Email has already been registered"});
      // return res.render('register', { err_msg: "Email has already been registered" } );
      req.flash("err_msg", "信箱已註冊");
      return res.redirect("/member/register");

    } else if(password !== confirmPassword) {
      req.flash("err_msg", "密碼不一致");
      return res.redirect("/member/register");
      // return res.json({status: "error", error: "THe password do not match"})
      
    }else{
      //hash password
      const hashedPassword =  bcrypt.hashSync(password,10);
      console.log(hashedPassword);
  
      db.exec(`INSERT INTO users SET ?`,{name: name, email: email, password: hashedPassword}, (results, fields) =>{
        
        if(results) {
          
          console.log("REGISTER SUCCESSS");
          return  res.redirect("/");
        }

      })
    }
  })

})





//----------- login ----------
router.get("/login", (req, res) => {
  var err_msg = req.flash("err_msg");
  res.render("login.ejs", {res, err_msg});
})

router.post("/login",  function(req, res) {
  const { email, password } = req.body;
  //check enter email and password or not
  if(!email || !password) return res.json({ status: "error", error: "Please enter your email and password"});

  db.exec(`SELECT * FROM users WHERE email= ? `,[email], async function(results, fields) {
    
  
    // console.log(bcrypt.compareSync(password, results[0].password));
    
      // 將使用者輸入的密碼和存在資料庫的密碼進行比較
      if( !results[0] || !(await bcrypt.compare(password, results[0].password))){
        req.flash("err_msg", "密碼錯誤");
        return res.redirect("/member/login");
        // return res.json({status: "error", error: "Incorrect email or password"});

      } else{
        // const payload = {
        //   id: results[0].id,
        //   email: results[0].email,
        // };
        // // 根據 id , email 生成 token
        // const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPTRES});
        // const cookieOptions = {
        //   expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRS *24 *60 *60 *1000),
        //   httpOnly: true
        // }
        // res.cookie("userRegistered", token, cookieOptions);
        req.session.isLogin = true;
        req.session.user = results[0].name;
        req.session.email = results[0].email;
        req.session.userId = results[0].id;
        // console.log(req.session.user);
        return  res.redirect("/");

      }
    }
  );
});







//----------- google login ----------

router.get('/auth/google',
  passport.authenticate('google', { scope: [ 'email', 'profile' ] }
)); 

router.get('/auth/google/callback',
  passport.authenticate( 'google', {
    successRedirect: '/member/success',
    failureRedirect: '/member/auth/google/failure'
  })
);

router.get('/success', isLoggedIn, (req, res) => {
  req.session.isLogin = true;
  req.session.user = req.user.name;
  

  res.redirect("/member/home");
});

router.get('/auth/google/failure', (req, res) => {
  res.send('Failed to authenticate..............');
});






//----------- logout ----------
router.get("/logout", (req, res) => {
  req.session.isLogin = false;
  res.clearCookie("userRegistered");
  req.session.destroy(() => {
    console.log('session destroyed')
  })
  res.redirect("/");
})










//----------- mycenter check login or not ----------
router.get("/mycenter",isLoggedIn, (req, res, next) => {

  // console.log("welcome to mecenter");
  // console.log(req.session)
  // console.log(req.sessionID)
  const userName = req.session.user || req.user.displayName;
  const userEmail = req.session.email || req.user.emails[0].value;
  return res.render('mycenter', { userName, userEmail, res})
  // console.log(req.cookies.userRegistered);

  //如果抓不到 jwt 就回首頁
      // if(req.cookies.userRegistered == "Guest"){ 
      //   return res.send(JSON.stringify("notToday"));
      //   // res.redirect("/member/index.html");
      //   // return next();
      //     // return res.status(400).send({message: "your is not"});
      //     // return next();
      //   }
          
      //     try{
          
      //       const decode = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET);
      //       db.exec(`SELECT * FROM users WHERE id = ?`,[decode.id] , (result, fields) => {
      //         bae = result[0];
      //         return res.send(JSON.stringify(bae));
      //         next();
      //       });
            
      //     }catch (err){
      //       if(err) return next();
      //     }
          
        
  })








// app.put("/todo/item", function (req, res) {
//   conn.query("update todoTable set title= ?, isComplete = ? where todoTableId = ?", 
//       [req.body.title, req.body.isComplete, req.body.todoTableId],
//       function (err, rows) {
//           res.send( JSON.stringify( req.body ));
//       }
//   )

// })

// app.delete("/todo/delete/:id", function (req, res) {
//   conn.query("delete from todoTable where todoTableId = ?",
//       [req.params.id], 
//       function (err, rows) {
//           res.send("#" + req.params.id + " deleted");
//       }
//   )
// })




//----------- if forgot password send email ----------
function sendEmail(email,token) {
 
  var email = email;
  var token = token;
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'gemipio1128@gmail.com',
        pass: 'oylmspokbfzukgoq'
    }
  });
  console.log("this is my tojen1 :"+token);
  
  send(token);

  async function send(token) {
    const result = await transporter.sendMail({
        from: 'gemipio1128@gmail.com',
        to: email,
        subject: 'tokyo 重新設定密碼',
        html: '<h5>我們已收到你的請求</h5><h5>你現在可以重設密碼！</h5><h1>請點擊 <a href="http://localhost:3000/member/reset-password/' + token + '">這裡</a> 重新設定你的密碼</h1><h5>若未要求新密碼？請忽略這封電子郵件。</h5>'
    });
  
    console.log("this is my tojen2 :"+token);
    console.log(JSON.stringify(result, null, 4));
  }
}




/* send reset password link in email */
router.post('/reset-password-email', function(req, res, next) {

  var email = req.body.email;
  db.exec(`SELECT * FROM users WHERE email = ? `,[email], (result, fields)=>{       
      var type = ''
      var msg = ''
 
      console.log(result[0]);
      if (result[0].email.length > 0) {

         var token = randtoken.generate(20);
         var sent = sendEmail(email,token);
           if (sent != '0') {
              var data = {
                  token: token
              }
              db.exec('UPDATE users SET ? WHERE email ="' + email + '"', data, (result, fields)=>{
              } )

              type = 'success';
              msg = 'The reset password link has been sent to your email address';
              // console.log(msg);
          } else {
              type = 'error';
              msg = 'Something goes to wrong. Please try again';
              // console.log(msg);
          }

      } else {
          console.log('2');
          type = 'error';
          msg = 'The Email is not registered with us';
        //  console.log(msg);

      }
  
      // req.flash(type, msg);
      res.redirect('/');
  });
})

// router.get("/reset-password/:token", (req, res) => {
//   db.exec(`SELECT * FROM users WHERE token =? `, [req.params.token], (result, fields) => {
//     res.send( JSON.stringify(result[0]));
//     // res.send( req.params.token);
//   })
// })
// router.get('/reset-password/token=/:token', function(req, res, next) {
//   res.render('resetPassword', {
//   title: 'Reset Password Page',
//   token: req.query.token
//   });
//   });

  router.get("/reset-password/:token", (req, res) => {
    res.render("resetPassword.ejs", {
      title: 'Reset Password Page',
      token: req.params.token,
      res
    });
  })




/* update password to database */
router.post('/update-password', function(req, res, next) {
 console.log("  update11111111111111111111");
 const { token } = req.body;
 var password = req.body.password;
 console.log("tototis : "+token);
 console.log("password : "+password);
 
 db.exec(`SELECT * FROM users WHERE token = ?`, [token], (result, fields) =>{
   
   var type
   var msg
   console.log(result);
      if (result) {
              
            var saltRounds = 10;

           // var hash = bcrypt.hash(password, saltRounds);

          bcrypt.genSalt(saltRounds, function(err, salt) {
                bcrypt.hash(password, salt, function(err, hash) {

                 var data = {
                      password: hash
                  }

                  db.exec('UPDATE users SET ? WHERE email ="' + result[0].email + '"', data, function( result,fields) {
                    console.log(result)
                  });

                });
            });

          type = 'success';
          msg = 'Your password has been updated successfully';
            
      } else {

          console.log('2');
          type = 'success';
          msg = 'Invalid link; please try again';

          }

      // req.flash(type, msg);
      res.redirect('/');
  });
})


//----------- serve and privicy ----------
router.get("/serve", (req, res) => {
  res.render("serve.ejs", {res});
})
router.get("/privacy", (req, res) => {
  res.render("privacy.ejs", {res});
})




//----------- Onlymember ----------
router.get("/home",isLoggedIn, (req, res) => {
  const userSeeeionName = req.session.user || req.user.name;
  const userEmail = req.session.email || req.user.email;
  const userId = req.session.userId || req.user.id;
  return res.render('OM_Home.ejs', { userSeeeionName, userEmail, userId, res})
})
router.get("/horse1",isLoggedIn, (req, res) => {
  const userSeeeionName = req.session.user || req.user.name;
  const userEmail = req.session.email || req.user.email;
  const userId = req.session.userId || req.user.id;
  return res.render('horse1.ejs', { userSeeeionName, userEmail, userId, res})
})
router.get("/horse2",isLoggedIn, (req, res) => {
  const userSeeeionName = req.session.user || req.user.name;
  const userEmail = req.session.email || req.user.email;
  const userId = req.session.userId || req.user.id;
  return res.render('horse2.ejs', { userSeeeionName, userEmail, userId, res})
})
router.get("/nightclub1",isLoggedIn, (req, res) => {
  const userSeeeionName = req.session.user || req.user.name;
  const userEmail = req.session.email || req.user.email;
  const userId = req.session.userId || req.user.id;
  return res.render('nightclub1.ejs', { userSeeeionName, userEmail, userId, res})
})
router.get("/nightclub2",isLoggedIn, (req, res) => {
  const userSeeeionName = req.session.user || req.user.name;
  const userEmail = req.session.email || req.user.email;
  const userId = req.session.userId || req.user.id;
  return res.render('nightclub2.ejs', { userSeeeionName, userEmail, userId, res})
})
router.get("/nightclub3",isLoggedIn, (req, res) => {
  const userSeeeionName = req.session.user || req.user.name;
  const userEmail = req.session.email || req.user.email;
  const userId = req.session.userId || req.user.id;
  return res.render('nightclub3.ejs', { userSeeeionName, userEmail, userId, res})
})
router.get("/scenery",isLoggedIn, (req, res) => {
  const userSeeeionName = req.session.user || req.user.name;
  const userEmail = req.session.email || req.user.email;
  const userId = req.session.userId || req.user.id;
  return res.render('scenery.ejs',{ userSeeeionName, userEmail, userId, res})
})



router.get("/memberworks",isLoggedIn, (req, res) => {
  const userSeeeionName = req.session.user || req.user.name;
  const userEmail = req.session.email || req.user.email;
  const userId = req.session.userId || req.user.id;
  return res.render('memberworks.ejs', { userSeeeionName, userEmail, userId, res})
})
// router.get("/navbar", (req, res) => {
//   const userSeeeionName = req.session.user || req.user.name;
//   const userEmail = req.session.email || req.user.email;
//   const userId = req.session.userId || req.user.id;
//   return res.render('navbar.ejs', { userSeeeionName, userEmail, userId})
// })







module.exports = router;