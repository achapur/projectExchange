const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
//para axios
const axios = require("axios");


//COUNTRIES LIST
//All countries
    router.get("/list", (req, res, next) => {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((responseAxios) => {
        
          //.sort(function(a, b) 
          let countries= responseAxios.data.map((country)=>{
            return {name: country.name.common, flag: country.flags.png}       
          })

                console.log("respuesta de axios:", countries);
          res.render("country/list-country", {countries});
        })
        .catch((error) => {
          next(error);
        });
    });

    //REGIONS
    //Europe
    router.get("/list/europe", (req, res, next) => {
      axios
        .get("https://restcountries.com/v3.1/region/europe")
        .then((responseAxios) => {
        
          //.sort(function(a, b) 
          let countries= responseAxios.data.map((country)=>{
            return {name: country.name.common, flag: country.flags.png}       
          })

                console.log("respuesta de axios:", countries);
          res.render("country/list-country", {countries});
        })
        .catch((error) => {
          next(error);
        });
    });

    //Africa
    router.get("/list/africa", (req, res, next) => {
      axios
        .get("https://restcountries.com/v3.1/region/africa")
        .then((responseAxios) => {
        
          //.sort(function(a, b) 
          let countries= responseAxios.data.map((country)=>{
            return {name: country.name.common, flag: country.flags.png}       
          })

                console.log("respuesta de axios:", countries);
          res.render("country/list-country", {countries});
        })
        .catch((error) => {
          next(error);
        });
});

    //Oceania
    router.get("/list/oceania", (req, res, next) => {
      axios
        .get("https://restcountries.com/v3.1/region/oceania")
        .then((responseAxios) => {
        
          //.sort(function(a, b) 
          let countries= responseAxios.data.map((country)=>{
            return {name: country.name.common, flag: country.flags.png}       
          })

                console.log("respuesta de axios:", countries);
          res.render("country/list-country", {countries});
        })
        .catch((error) => {
          next(error);
        });
    });

        //Asia
    router.get("/list/asia", (req, res, next) => {
      axios
        .get("https://restcountries.com/v3.1/region/asia")
        .then((responseAxios) => {
        
          //.sort(function(a, b) 
          let countries= responseAxios.data.map((country)=>{
            return {name: country.name.common, flag: country.flags.png}       
          })

                console.log("respuesta de axios:", countries);
          res.render("country/list-country", {countries});
        })
        .catch((error) => {
          next(error);
        });
    });

            //North America
    router.get("/list/americas", (req, res, next) => {
      axios
        .get("https://restcountries.com/v3.1/all")
        .then((responseAxios) => {
        
          //.sort(function(a, b) 
          let countries= responseAxios.data.map((country)=>{
            return {name: country.name.common, flag: country.flags.png}       
          })

                console.log("respuesta de axios:", countries);
          res.render("country/list-country", {countries});
        })
        .catch((error) => {
          next(error);
        });
    });

    //COUNTRY PROFILE
    router.get("/:code", (req, res, next) => {
                const {code} = req.params
      axios
        .get(`https://restcountries.com/v3.1/alpha/${code}`)
        .then((responseAxios) => {
        
          //.sort(function(a, b) 

          let singleCountry= responseAxios.data.map((country)=>{
            return {code: country.cca3,name: country.name.common, flag: country.flags.png}   
          })
        console.log("respuesta de axios:", singleCountry);
          res.render("country/profile", {singleCountry});
        })
        .catch((error) => {
          next(error);
        });
    });


module.exports = router;