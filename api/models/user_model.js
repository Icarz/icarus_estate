import mongoose from "mongoose";

// creating Schema //

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true } // helps to sort things after! // 
);


const User = mongoose.model('User',userSchema);

export default User;