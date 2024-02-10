import { Router } from "express";
const router = Router();
import { signup, signin } from "../controller/auth.controller.js";

//route signup
router.route("/signup").post(signup);
router.route("/signin").post(signin);

export default router;
