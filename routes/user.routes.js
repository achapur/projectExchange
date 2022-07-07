const router = require("express").Router();
const User = require("../models/User.model");
const req = require("express/lib/request");
const fileUploader = require("../config/cloudinary.config");
const { populate } = require("../models/User.model");

//ROUTES GO HERE
/* Edit USER get*/
router.get("/edit-user", (req, res, next) => {
  // obtain current user out of our req.session
  const { user } = req.session;
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
    console.log("req.file", req.file);
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
/* Look at current USER profile*/
router.get("/my-profile", (req, res, next) => {
  
  const { user } = req.session;
  res.render("user/profile", user);
});

//**********ROUTE FOR DETAILS DOG */
router.get("/profile/:id", (req, res, next) => {
  const { id } = req.params;

  User.findById(id)
    .then((otherUser) => {

      res.render("/user/other-profile/", { user: otherUser}); //
    })
    .catch((error) => {
      console.log("Error", error);
      next();
    });
});

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
 
module.exports = router;

//EXPORTS
module.exports = router;
