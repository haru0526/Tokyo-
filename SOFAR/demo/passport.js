// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth2').Strategy;
// // var GoogleStrategy = require('passport-google-oidc');
// const db = require("./db");

// GOOGLE_CLIENT_ID = '945471780602-lt50iv3vp4f7mgqn5ceoa87d081p143i.apps.googleusercontent.com';
// GOOGLE_CLIENT_SECRET = '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';

// passport.use(new GoogleStrategy({
//   clientID: GOOGLE_CLIENT_ID,
//   clientSecret: GOOGLE_CLIENT_SECRET,
//   callbackURL: "http://localhost:3000/member/auth/google/callback",
//   passReqToCallback: true,
  
// },function verify(issuer, profile, cb) {
//     db.exec('SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?', [
//       profile.id,
//       profile.id
//     ], function(results, field) {
//       if (!results.length) {
//         console.log("1");
//         // The account at Google has not logged in to this app before.  Create a
//         // new user record and associate it with the Google account.
//         db.exec('INSERT INTO users (name) VALUES (?)', [
//           profile.displayName

//         ], function(results, field) {
//           var id = this.lastID;
//           db.exec('INSERT INTO federated_credentials ( provider, subject, user_id) VALUES (?, ?, ?)', [
//             profile.id,
//             profile.id,
//             id
//           ], function(results, field) {
//             var user = {
//               id: id,
//               name: profile.displayName
//             };
//             return cb(null, user);
//           });
//         });

//       } else {
//         console.log("2");

//         // The account at Google has previously logged in to the app.  Get the
//         // user record associated with the Google account and log the user in.
//         db.exec('SELECT * FROM users WHERE id = ?', [ googleID ], function(results, field) {
//           // if (err) { return cb(err); }
//           if (!fields) {return cb(null, false); }
//           return cb(null, profile);
//         });
//       }
//     }
//     )}
// ));

// // passport.use(new GoogleStrategy({
// //   clientID: GOOGLE_CLIENT_ID,
// //   clientSecret: GOOGLE_CLIENT_SECRET,
// //   callbackURL: "http://localhost:3000/member/auth/google/callback",
// //   passReqToCallback: true,
  
// // },  function verify(issuer, profile, cb) {
// //   // return done(null, profile);
// //   console.log(profile);
  

// //       db.exec('SELECT * FROM federated_credentials WHERE provider = ? AND subject = ?', [
// //         issuer.toString(),
// //         profile.id
// //       ], function(results, fields) {
// //         console.log(results);
// //         if (!results.length) {
// //           console.log("11111111111111111111111111111111111111111111111111111111");
       
// //           // The Google account has not logged in to this app before.  Create a
// //           // new user record and link it to the Google account.
// //           db.exec(`INSERT INTO users SET ?`,
// //           {name: profile.displayName, email: profile.email, googleID: profile.id}, 
// //           function(results, fields) {
// //           console.log("2222222222222222222222222222222222222222222222222222222222222");

// //             var id = this.id;
// //             db.exec(`INSERT INTO federated_credentials (provider, subject, user_id) VALUES (?, ?, ?)`, [
// //               profile,
// //               profile.id,
// //               profile.id
// //             ], function(results, fields) {
// //                 console.log("33333333333333333333333333333333333333333333333333333333333333333333");

// //               var user = {
// //                 id: id,
// //                 name: profile.displayName
// //               };
// //               return cb(null, profile);
// //             });
// //           });


// //         } else {
// //           console.log("4444444444444444444444444444444444444444444444444444444444444444");

// //           // The Google account has previously logged in to the app.  Get the
// //           // user record linked to the Google account and log the user in.
// //           db.exec(`SELECT * FROM users WHERE googleID = ?`, [ profile.id ], function(results, fields) {
// //             console.log("555555555555555555555555555555555555555555555555555555");

// //             if (!fields) {
// //             console.log("6666666666666666666666666666666666");
              
// //               return cb(null, false); }
// //             return cb(null, profile);
// //           });
// //         }
// //       }
// //     )

// //   }
// // ));

  
//   // 這邊簡單來說就是簡化存在session內的資料，session存放使用者id
//   // 再用使用者id找出詳細資料
//   passport.serializeUser(function(user, done) {
//     done(null, user);
//   });
  
//   passport.deserializeUser(function(user, done) {
//     done(null, user);
//   });

//   module.exports = passport;




// //   function(request, accessToken, refreshToken, profile, done) {
// //   // console.log(profile);
 
// //   db.exec('SELECT * FROM users WHERE id = ?', [profile.id], (result, fields) => {

// //       if(!result.legth){
// //         console.log("no");
// //         return done(null,fields);
// //       }else{

        
// //         db.exec(`INSERT INTO users SET ?`,{name: profile.displayName, email: profile.email, googleID: profile.id}, (results, fields) =>{
          
// //           if(results) {
// //             console.log("REGISTER SUCCESSS");
// //             // return  res.redirect("/member/index.html");
// //             return done(null,fields);
            
// //           }
// //         })
// //       }
    
// //   })
// // }));

// // passport.serializeUser(function(user, done) {
// //   done(null, user);
// // });

// // passport.deserializeUser(function(user, done) {
// //   done(null, user);
// // });



const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;

GOOGLE_CLIENT_ID = '945471780602-lt50iv3vp4f7mgqn5ceoa87d081p143i.apps.googleusercontent.com';
GOOGLE_CLIENT_SECRET = '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';

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:3000/member/auth/google/callback",
  passReqToCallback: true,
  
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});