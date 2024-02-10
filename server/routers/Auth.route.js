import { Router } from "express";
const router = Router();
import { signup } from "../controller/auth.controller.js";

//route signup
router.route("/signup").post(signup);

export default router;
