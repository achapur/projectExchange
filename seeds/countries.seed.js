const mongoose =require("mongoose")
const Country=require("../models/Country.model")
const DB_NAME= process.env.MONGODB_URI
//checar si funciona el dbname

const countries = [
    {country_name:,
    population:,
    flag_pic:,
    langauge:[],
    cover_pic:,
    description:,},
        {country_name:,
    population:,
    flag_pic:,
    langauge:[],
    cover_pic:,
    description:,},
        {country_name:,
    population:,
    flag_pic:,
    langauge:[],
    cover_pic:,
    description:,},
        {country_name:,
    population:,
    flag_pic:,
    langauge:[],
    cover_pic:,
    description:,},
]

Country.create(countries, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${countries.length} new countries`);
  mongoose.connection.close();
});