import mongoose from "mongoose";
const Schema = mongoose.Schema;
const userSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "full name is required"],
  },
  email: {
    type: String,
    required: [true, " email is required"],
  },
  password: {
    type: String,
    required: Boolean,
  },
  addresses: [
    {
      detail: {
        type: String,
      },
      for: {
        type: String,
      },
    },
  ],
  phonenumber: [
    {
      type: Number,
    },
  ],
});
const UserModel = mongoose.model("UserModel", userSchema);
export default UserModel;
