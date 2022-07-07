const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
//para axios
const axios = require("axios");
const async = require("hbs/lib/async");


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

    // COUNTRY PROFILE
    
    router.get("/:code", async (req, res, next) => {
                const {code} = req.params
let miObject = {}
try {
        const singleCountry2 = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`)
    //let miObject = {name, country, population, flag,code}
    // singleCountry2.map(country => {country.name})
    const {data} = singleCountry2
    let miObject =   data.map(country=>{
    return {name: country.name.common, flag: country.flags.png}       
    })
    console.log(singleCountry2)
    res.render("country/profile", {miObject});
    } catch (error) {
        console.log(error)
    }

    });


module.exports = router;