const router = require("express").Router();
const User = require("../models/User.model");
const fileUploader = require("../config/cloudinary.config");

//ROUTES GO HERE
/* Edit USER get*/
router.get("/edit-profile", (req, res, next) => {
  // obtener al current user del request que fue almacenado gracias a express-session
  const { user } = req.session;
  res.render("user/edit-user", user);
});
/* Edit USER post*/
router.post(
  "/edit-profile",
  fileUploader.single("profile_pic"),
  (req, res, next) => {
    let profile_pic;
    if (req.file) {
      profile_pic = req.file.path;
    }
    console.log("req.file", req.file);
    const { role, ...restUser } = req.body;
    const { user } = req.session;
    User.findByIdAndUpdate(
      user._id,
      { ...restUser, profile_pic },
      { new: true }
    )
      .then((updatedUser) => {
        //sobrescribir el user current req.session
        req.session.user = updatedUser;
        res.redirect("/user/my-profile");
      })
      .catch((error) => {
        next(error);
      });
  }
);
/* Look at current USER profile*/
router.get("/my-profile", (req, res, next) => {
  const { user } = req.session;
  res.render("user/profile", user);
});

//EXPORTS
module.exports = router;
