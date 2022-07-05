const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const countriesSchema = new Schema(
  {
  country_name: {
    type: String,
    unique: true,
    required: true
  },
    population:Number,    
    flag_pic: {
      type: String,
      default:"https://emojipedia-us.s3.amazonaws.com/source/skype/289/white-flag_1f3f3-fe0f.png",
      required: true
    },
    language: {
      type: String,
      enum:["Bulgarian", "Croatian", "Cezch","Danish", "Dutch", "English","Estonian", "Finnish", "German", "Greek","Hungarian", "Irish", "Italian", "Latvian", "Maltese", "Polish", "Portuguese", "Romanian", "Slovak", "Slovenian","Spanish", "Swedish"],
      default:"English"
    },
    cover_pic: {
      type: String,
      default:"https://res.cloudinary.com/dtdqsyryk/image/upload/v1656981017/worldexchangers_cover_zzkyik.png"
    },
    description: {
      type: String,
      required:true
    },
    timestamps: true
    }
);

const Country = model("Country", countrySchema);

module.exports = Country;
