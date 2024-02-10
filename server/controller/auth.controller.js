import bcrypt from "bcryptjs";

import { ApiError } from "../utiles/ApiError.js";
import { ApiResponse } from "../utiles/ApiResponse.js";
import { asyncHandler } from "../utiles/asyncHandler.js";
import UserModel from "../model/user.model.js";
const signup = asyncHandler(async (req, res) => {
  try {
    const { fullname, email, password, phonenumber } = req.body;
    if (fullname && email && password && phonenumber == "") {
      return res.json("all fields are required");
    }
    const existedUser = await UserModel.findOne({
      $or: [{ phonenumber }, { email }],
    });

    if (existedUser) {
      return res.json({ error: "user allready exists" });
    }

    // generate jwt token

    // save to db
    const user = await UserModel.create(req.body);
    const token = user.generateJwtToken();
    return res.status(200).json({ token, staus: "user signup successfully " });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});
const signin = asyncHandler(async (req, res) => {
  try {
    const { email, password, phonenumber } = req.body;
    if (!password && !email) {
      return res.json({ error: "username or email is required" });
    }
    const user = await UserModel.findOne({
      $or: [{ phonenumber }, { email }],
    });
    if (!user) {
      return res.json({ error: "User does not exist" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.json({ error: "Invalid user credentials" });
    }
    const token = await user.generateJwtToken();
    return res.status(200).json({ token, staus: "user signin successfully " });
  } catch (error) {}
});
export { signup, signin };
