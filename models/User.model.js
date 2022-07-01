const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
  first_name: {
    type: String,
    unique: true,
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
      default:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1558806705/asdsadsa_iysw1l.jpg"
    },
    role: {
      type: String,
      enum: ["ADMIN", "STAFF", "USER"],
      default: "USER"
    },
    followers: {
        type:ObjectID,
        Ref:"User"
    },
    following: {
      type:ObjectiID,
      Ref:"User"
    },
    timestamps: true
  }
);

const User = model("User", userSchema);

module.exports = User;
