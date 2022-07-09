const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
//para axios
const axios = require("axios");
const countrySchema = require("../models/Country.model");

//If you are not logged in as User or Organization, you go to Landing Page
router.get("/landing", (req, res, next) => {
  res.render("landing");
});

/* lets you see homepage if you are logged in */
router.get("/",isLoggedIn, (req, res, next) => {
  res.render("index",{user:req.session.user});
});

Countries.create(countries, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Creamos ${countries.length} en countries model`);
  mongoose.connection.close();
});

module.exports = router;