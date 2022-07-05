const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
  first_name: {
    type: String,

    required: true
  },
  
    username: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
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
    role: {
      type: String,
      enum: ["ADMIN", "STAFF", "USER"],
      default: "USER"
    },
    followers: [{type: Schema.Types.ObjectId,
      ref: "User"}]
    ,
    following: [{type: Schema.Types.ObjectId,
      ref: "User"}],
  },
  { timestamps: true }
);

const User = model("User", userSchema);

module.exports = User;
