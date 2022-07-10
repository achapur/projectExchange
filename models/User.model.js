const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
  first_name: {
    type: String,
    max: 30
  },
    username: {
      type: String,
      unique: true,
      trim: true,
      required: true,
      lowercase: true
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    profile_pic: {
      type: String,
      default:"https://res.cloudinary.com/dtdqsyryk/image/upload/v1656981437/profile_pic_ipfh2f.png"
    },
    _home_country:  [{type: Schema.Types.ObjectId,
      ref: "Country"}],
    _host_country:  [{type: Schema.Types.ObjectId,
      ref: "Country"}],
    role: {
      type: String,
      enum: ["ADMIN", "ORG", "USER"],
      default: "USER"
    },
    followers: [{type: Schema.Types.ObjectId,
      ref: "User"}]
    ,
    following: [{type: Schema.Types.ObjectId,
      ref: "User"}],
    _organization: [{
      type: Schema.Types.ObjectId,
      ref: "Organization"
    }]
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
