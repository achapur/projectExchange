const router = require("express").Router();
//Models
const Country = require("../models/Country.model");
const User = require("../models/User.model");
const Organization = require("../models/Organization.model");
//Middlewares
const isLoggedIn = require("../middleware/isLoggedIn");
const hasDoneStep2 = require("../middleware/hasDoneStep2");
const {checkRole} =require("../middleware/checkRole")
//Cloudinary file upload
const fileUploader = require("../config/cloudinary.config");
const isLoggedOut = require("../middleware/isLoggedOut");

//ROUTES GO HERE


router.get('/my-org/', isLoggedIn, hasDoneStep2, (req,res,next)=>{
    const {user} = req.session
    
    User.findById(user._id).populate("_organization _host_country _home_country")
    res.render("user/profile", user);
})


// //EXPORTS
module.exports = router;