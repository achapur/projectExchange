const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const countrySchema = new Schema(
  {
    name: {type: String},
    cca3: {type: String},
    capital: {type: String},
    region: {type:String},
    subregion: {type:String},
    timezones: {type:String},
    continents: {type:String},
    flags: {type:String},
    population: {type:String}},{
    timestamps: true
    }
);

const Country = model("Country", countrySchema);

module.exports = Country;
