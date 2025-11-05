import express from "express";
import { loginUser, signupUser } from "../controllers/user.controller.js";
const router = express.Router();

// LOGIN Route
router.route("/").post(loginUser);

// REGISTER Route
router.route("/").post(signupUser);

export default router;
