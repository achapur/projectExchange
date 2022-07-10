const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const organizationSchema = new Schema(
  {
    org_name: {
      type: String,
      unique: true,
      required: true,
      max: 30
    },
    org_logo: {
      type: String,
      default:"/public/images/we_logo_round_mxkchc.png"
    },
    _home_country:  {
      type: Schema.Types.ObjectId,
        ref: "Country"},
    slogan: {
      type: String,
      max: 60
    },
    main_language: {
      type: String,
      enum:[ "Arabic", "Bengali", "Bulgarian", "Croatian", "Cezch","Danish", "Dutch", "English","Estonian", "Finnish", "German", "Greek","Hindi","Hungarian", "Irish", "Italian", "Javanese", "Japanese", "Latvian", "Korean", "Malay", "Maltese","Mandarin", "Polish", "Portuguese", "Pubjabi", "Romanian", "Russian", "Slovak", "Slovenian","Spanish", "Swedish", "Telugu", "Thai", "Turkish", "Wu"],
      default:"English"
    },
    description: {
      type: String,
      required: true,
      max: 300
    },
    websiteURL: {
      type: String,
    }},
    { timestamps: true }
  );

organizationSchema.path('websiteURL').validate((val) => {
  urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  return urlRegex.test(val);
}, 'Invalid URL.');

const   Organization = model("Organization", organizationSchema);

module.exports = Organization;