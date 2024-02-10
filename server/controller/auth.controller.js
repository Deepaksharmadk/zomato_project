import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ApiError } from "../utiles/ApiError.js";
import { ApiResponse } from "../utiles/ApiResponse.js";
import { asyncHandler } from "../utiles/asyncHandler.js";
import UserModel from "../model/user.model.js";
const signup = asyncHandler(async (req, res) => {
  try {
    const { fullname, email, password, phonenumber } = req.body;
    const checkUserbyemail = await UserModel.findOne({ email });
    const checkUserbyphone = await UserModel.findOne({ phonenumber });
    if (checkUserbyemail || checkUserbyphone) {
      return res.json({ error: "user allready exists" });
    }
    // hash the password
    const bcryptsalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, bcryptsalt);
    // generate jwt token
    const token = jwt.sign(
      {
        user: {
          fullname,
          email,
        },
      },
      "shhhhh"
    );
    // save to db
    await UserModel.create({
      ...req.body,
      password: hashPassword,
    });
    return res.status(200).json({ token, staus: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
export { signup };
