const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
//para axios
const axios = require("axios");

/* GET home page */
router.get("/",isLoggedIn, (req, res, next) => {
  res.render("index",{user:req.session.user});
});



module.exports = router;