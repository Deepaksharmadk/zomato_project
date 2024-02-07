import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  fullname: {
    typeof: String,
    required: [true, "full name is required"],
  },
  email: {
    typeof: String,
    required: [true, " email is required"],
  },
  password: {
    typeof: String,
    required: Boolean,
  },
  addresses: [
    {
      detail: {
        typeof: String,
      },
      for: {
        typeof: String,
      },
    },
  ],
  phonenumber: [
    {
      typeof: Number,
    },
  ],
});
const UserModel = mongoose.model("UserModel", userSchema);
export default User;
