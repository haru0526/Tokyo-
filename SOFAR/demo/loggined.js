module.exports = {
  isLoggedIn : function (req, res, next) {
    if (req.user|| req.session.user) {
      console.log('authenticated')
      next()
    } else {
      console.log('not authenticated')
      return res.redirect("/member/login");
    }
  
    next()
  }

}
