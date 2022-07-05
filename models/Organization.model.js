const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const organizationSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    logo: {
      type: String,
      required: true
    },
    slogan:{ type: String},
    main_language: {
      type: String,
      enum:["Bulgarian", "Croatian", "Cezch","Danish", "Dutch", "English","Estonian", "Finnish", "German", "Greek","Hungarian", "Irish", "Italian", "Latvian", "Maltese", "Polish", "Portuguese", "Romanian", "Slovak", "Slovenian","Spanish", "Swedish"],
      default:"English"
    },
    description: {
      type: String,
      required: true
    },
    timestamps: true
}
);

const   Organization = model("Organization", organizationSchema);

module.exports = Organization;