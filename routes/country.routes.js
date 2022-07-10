const router = require("express").Router();
const Country = require("../models/Country.model");
const isLoggedIn = require("../middleware/isLoggedIn");
//para axios
const axios = require("axios");
const async = require("hbs/lib/async");


//COUNTRIES LIST
//All countries
    // router.get("/list", (req, res, next) => {
    //   axios
    //     .get("https://restcountries.com/v3.1/all")
    //     .then((responseAxios) => {
        
    //       //.sort(function(a, b) 
    //       let countries= responseAxios.data.map((country)=>{
    //         return {name: country.name.common, flag: country.flags.png}       
    //       })

    //             console.log("respuesta de axios:", countries);
    //       res.render("country/list-country", {countries});
    //     })
    //     .catch((error) => {
    //       next(error);
    //     });
    // });


    // COUNTRY PROFILE (WASNT WORKING)
    
//     router.get("/:code", async (req, res, next) => {
//                 const {code} = req.params
// let miObject = {}
// try {
//         const singleCountry2 = await axios.get(`  `)
//     //let miObject = {name, country, population, flag,code}
//     // singleCountry2.map(country => {country.name})
//     const {data} = singleCountry2
//     let miObject =   data.map(country=>{
//     return {name: country.name.common, flag: country.flags.png}       
//     })
//     console.log(singleCountry2)
//     res.render("country/profile", {miObject});
//     } catch (error) {
//         console.log(error)
//     }

//     });

      router.get("/list", (req, res, next) => {
        Country.find()
        .then((countries)=>{
          console.log("countries", countries)
          res.render("country/list-country", {countries})
        })
        .catch((error)=>{
          console.log("error", error)
          next()
        })
      });
module.exports = router;