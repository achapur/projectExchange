const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const commentSchema = new Schema(
  {
  author_name: {
    type: String,
    required: true
  },
    content:String,    
    Date: {
      type: String,
      default:"https://emojipedia-us.s3.amazonaws.com/source/skype/289/white-flag_1f3f3-fe0f.png",
      required: true
    },
    timestamps: true
    }
);

const Comment = model("Comment", commentSchema);

module.exports = Comment;