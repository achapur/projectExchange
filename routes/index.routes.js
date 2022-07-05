const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
//para axios
const axios = require("axios");

/* GET home page */
router.get("/",isLoggedIn, (req, res, next) => {
  res.render("index",{user:req.session.user});
});

//COUNTRIES
/* GET home page with characters from API */
router.get("/countries", (req, res, next) => {
  //axios.get("URL")
  // .then()
  // .catch()
  axios
    .get("https://restcountries.com/v3.1/region/europe")
    .then((responseAxios) => {
    
      let countries= responseAxios.data.map((country)=>{
        return {name: country.name.common}
      })
            console.log("respuesta de axios:", countries);
      res.render("list-country", {countries});
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = router;
