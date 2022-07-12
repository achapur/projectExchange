const router = require("express").Router();

// ℹ️ Handles password encryption
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const fileUploader = require("../config/cloudinary.config");
const {checkRole} =require("../middleware/checkRole")

// How many rounds should bcrypt run the salt (default [10 - 12 rounds])
const saltRounds = 10;

// Require the User model in order to interact with the database
const User = require("../models/User.model");
const Organization = require("../models/Organization.model");
const Country = require("../models/Country.model");

// Require necessary (isLoggedOut and isLiggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

//get sign up step 1
router.get("/signup",  (req, res) => {
  res.render("auth/signup");
});

//get sign up step 2 USER
router.get("/signup/student/:id", checkRole(["USER","ADMIN"]), (req, res, next) => {
  const {id} =req.params

  User.findByIdAndUpdate(`${id}`)
  .then((user)=>{
    Country
    .find({id})
    .sort({ name: 1 }  )
    .then((countries)=>{
      Organization
      .find()
      .then((organizations)=>{
        res.render("auth/signup-student", {countries, organizations, user:req.session.user});
      })
    })
  })
    .catch(error=>{
      console.log(error)
      next (error)
  })
});



//get sign up step 2 ORGANIZATION
// router.get("/signup/organization", checkRole(["ORGANIZATION","ADMIN"]),  (req, res) => {
//   res.render("auth/signup-org");
// });

//post sign up step 1
router.post("/signup", (req, res) => {
  const { username, password, first_name, email, role } = req.body;

  if (!username) {
    return res.status(400).render("auth/signup", {
      errorMessage: "Please provide your username.",
    });
  }

  if (password.length < 5) {
    return res.status(400).render("auth/signup", {
      errorMessage: "Your password needs to be at least 5 characters long.",
    });
  }

  //   ! This use case is using a regular expression to control for special characters and min length
  /*
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  if (!regex.test(password)) {
    return res.status(400).render("signup", {
      errorMessage:
        "Password needs to have at least 8 chars and must contain at least one number, one lowercase and one uppercase letter.",
    });
  }
  */

  // Search the database for a user with the username submitted in the form
  User.findOne({ username })
  .then((found) => {
    // If the user is found, send the message username is taken
    if (found) {
      return res
        .status(400)
        .render("auth/signup", { errorMessage: "Username already taken." });
    }

    // if user is not found, create a new user - start with hashing the password
    return bcrypt
      .genSalt(saltRounds)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hashedPassword) => {
        // Create a user and save it in the database
        return User.create({
          username,
          password: hashedPassword,
          first_name,
          email,
          role,
        });
      })
      .then((user) => {
        // Bind the user to the session object
        if (user.role === "USER"){
          req.session.user= user;
          const {id} =req.params;
          console.log(user.role)
          res.redirect("/auth/signup/student/:id")};
        if (user.role === "ORGANIZATION"){
          req.session.user= user;
          res.redirect("/auth/signup/organization/:id")};
      })
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          return res
            .status(400)
            .render("auth/signup", { errorMessage: error.message });
        }
                    console.log(error.code)
        // if (error.code === 11000) {
        //   return res.status(400).render("auth/signup", {
        //     errorMessage:
        //       "Username needs to be unique. The username you chose is already in use.",
        //   });
        // }
        return res
          .status(500)
          .render("auth/signup", { errorMessage: error.message });
      });
  });
});

//post sign up step 2 USER
// router.post("/signup/student/:id", (req,res,next)=>{
//   const {id} = req.params
//   const { _host_country,_home_country,_organization} = req.body;
//   const { user } = req.session;
//   User
//     .findByIdAndUpdate(user.id, {_host_country,_home_country,_organization},{ new: true }
//     )
//     .then((user) => {
//       //overwrite current req.session
//       req.session.user = user;
//       res.redirect("/user/my-profile");
//     })
//     .catch((error) => {
//       console.log(error)
//       next(error);
//     });
// }
// );
//post signup2 user asyc
router.post('/signup/student/:id', async (req,res,next)=>{
    
  const {id} = req.params;
  const {_home_country, _host_country, _organization} = req.body;
  try{
    let student = await User
      .findByIdAndUpdate(id, {_host_country,_home_country,_organization},{ new: true })
      let homeCountry = await Country.findByIdAndUpdate({_home_country}, {$push:{'_students': id}})
      let hostCountry = await Country.findByIdAndUpdate({_host_country}, {$push:{'_students': id}})
      let organization = await Country.findByIdAndUpdate({_organization}, {$push:{'_students': id}})

  }catch(error){return error}

  res.redirect("/user/my-profile");

})
//post sign up step 2 ORGANIZATION
//TODO

//get login
router.get("/login", isLoggedOut, (req, res) => {
  res.render("auth/login");
});

//post login
router.post("/login", isLoggedOut, (req, res, next) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).render("auth/login", {
      errorMessage: "Please provide your username.",
    });
  }

  // Here we use the same logic as above
  // - either length based parameters or we check the strength of a password
  if (password.length < 5) {
    return res.status(400).render("auth/login", {
      errorMessage: "Your password needs to be at least 5 characters long.",
    });
  }

  // Search the database for a user with the username submitted in the form
  User.findOne({ username })
    .then((user) => {
      // If the user isn't found, send the message that user provided wrong credentials
      if (!user) {
        return res.status(400).render("auth/login", {
          errorMessage: "Wrong credentials.",
        });
      }

      // If user is found based on the username, check if the in putted password matches the one saved in the database
      bcrypt.compare(password, user.password).then((isSamePassword) => {
        if (!isSamePassword) {
          return res.status(400).render("auth/login", {
            errorMessage: "Wrong credentials.",
          });
        }
        req.session.user = user;
        // req.session.user = user._id; // ! better and safer but in this case we saving the entire user object
        //HERE I COULD ADD REDIRECTS DEPENDING ON USER ROLE
        return res.redirect("/");
      });
    })

    .catch((err) => {
      // in this case we are sending the error handling to the error handling middleware that is defined in the error handling file
      // you can just as easily run the res.status that is commented out below
      next(err);
      return res.status(500).render("login", { errorMessage: err.message });
    });
});

//get logout
router.get("/logout", isLoggedIn, (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res
        .status(500)
        .render("auth/logout", { errorMessage: err.message });
    }
    res.redirect("/");
  });
});

//ADMIN ROUTES
//Full list of Users
// router.get("/listUsers",checkRole(['ADMIN']),(req, res,next)=>{
//   User.find()
//   .populate('_organization')
//   .then((users) => {
//       res.render("listUsers", { users });
//   })
//   .catch((error) => {
//       console.log("error", error);
//       next();
//   });
// });


module.exports = router;
