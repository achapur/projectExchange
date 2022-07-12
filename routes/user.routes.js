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
const req = require("express/lib/request");
// const { populate } = require("../models/User.model");

//ROUTES GO HERE
/* Look at current USER profile*/
router.get("/my-profile", isLoggedIn, hasDoneStep2, (req, res, next) => {
  const {user} =req.session
  res.render("user/profile", user);
});


/* Edit USER get*/
router.get("/edit-user", isLoggedIn, hasDoneStep2,  (req, res, next) => {
  // obtain current user out of our req.session
  const {user} =req.session

  res.render("user/edit-user", user);
});
/* Edit USER post*/
router.post(
  "/edit-user",
  fileUploader.single("profile_pic"),
  (req, res, next) => {
    let profile_pic;
    if (req.file) {
      profile_pic = req.file.path;
    }
    const { role, ...restUser } = req.body;
    const { user } = req.session;
    User.findByIdAndUpdate(
      user._id,
      { ...restUser, profile_pic },
      { new: true }
    )
      .then((updatedUser) => {
        //overwrite current req.session
        req.session.user = updatedUser;
        res.redirect("/user/my-profile");
      })
      .catch((error) => {
        console.log(error)
        next(error);
      });
  }
);


// GET route to retrieve and display details of a specific book
// router.get('/books/:bookId', (req, res, next) => {
//   const { bookId } = req.params;
 
//   Book.findById(bookId)
//     .then(theBook => res.render('books/book-details.hbs', { book: theBook }))
//     .catch(error => {
//       console.log('Error while retrieving book details: ', error);
 
//       // Call the error-middleware to display the error page to the user
//       next(error);
//     });
// });
 


//EXPORTS
module.exports = router;
