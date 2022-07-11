const router = require("express").Router();
const Country = require("../models/Country.model");
const User = require("../models/User.model");
const Organization = require("../models/Organization.model");
const isLoggedIn = require("../middleware/isLoggedIn");
const async = require("hbs/lib/async");


//COUNTRIES LIST
router.get("/list", (req, res, next) => {
  Country.find()
  .sort({ name: 1 })
  .then((countries)=>{
    res.render("country/list-country", {countries})
  })
  .catch((error)=>{
    console.log("error", error)
    next()
  })
});

//COUNTRY PROFILE by id
router.get("/:id", (req, res, next) => {
  const {id} = req.params;

  Country.findById(id)
  // .populate("_users") if it had users
  // .populate("_orgs") if it had orgs in its model
  .then((country)=>{
    console.log(country)
    res.render("country/profile",  country)
  })
  .catch((error)=>{
    console.log("error", error)
    next()
  })
});


module.exports = router;