import {
  signUp,
  signIn,
  signOut,
  changePassword,
  signUpPremium,
} from "../Controller/UserController.js";
import { verifyToken } from "../middleware/auth.js";

import { isAdmin, isLogin } from "../middleware/decentralization.js";

import express from "express";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/signout", isLogin, signOut);
router.put("/change-password", isLogin, changePassword);
router.post("/signup-premium", verifyToken, signUpPremium); // thêm middleware isAdmin

export default router;