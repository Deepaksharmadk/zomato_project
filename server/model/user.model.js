import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
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
        required: true,
        minlenght: 10,
      },
    ],
  },
  {
    timestamps: true,
  }
);
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  user.password = await bcrypt.hash(user.password, 10);
  next();
});
userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    {
      user: this._id.toString(),
    },
    process.env.JWT_PRIVATE_KEY
  );
};

const UserModel = mongoose.model("UserModel", userSchema);
export default UserModel;
