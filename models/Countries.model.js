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
      default:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1558806705/asdsadsa_iysw1l.jpg",
      required: true
    },
    cover_pic: {
      type: String,
      default:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1558806705/asdsadsa_iysw1l.jpg"
    },

    description: {
      type: String,
      required:true
    },
    rating: {
      type: Number,
      min: 0,
      max: 5        
    },
    timestamps: true
    }
);

const Country = model("Country", userSchema);

module.exports = Country;
