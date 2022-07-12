const router = require("express").Router();
//Models
const Country = require("../models/Country.model");
const User = require("../models/User.model");
const Organization = require("../models/Organization.model");
//Middlewares
const isLoggedIn = require("../middleware/isLoggedIn");
const hasDoneStep2 = require("../middleware/hasDoneStep2");
const {checkRole} =require("../middleware/checkRole")

//COUNTRIES LIST
router.get("/list", isLoggedIn, hasDoneStep2, (req, res, next) => {
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
router.get("/:id",isLoggedIn, hasDoneStep2, (req, res, next) => {
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