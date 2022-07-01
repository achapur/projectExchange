const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const organizationsSchema = new Schema(
  {
    posts:String,  
    logo: {
      type: String,
      required: true
    },
    
    slogan:String,
    name: {
      type: String,
      unique: true,
      required: true
    },

    Main_language: {
      type: String,
      enum:["ENG", "ESP", "FR","POR"],
      default:"ENG"
    },
    description: {
      type: String,
      required: true
    },
    timestamps: true
}
);

const Country = model("Country", userSchema);

module.exports = Country;