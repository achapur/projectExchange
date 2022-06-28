const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");


/* GET home page */
router.get("/",isLoggedIn, (req, res, next) => {
  res.render("index",{user:req.session.user});
});

module.exports = router;
