import {
  signUp,
  signIn,
  signOut,
  changePassword,
  updateProfile,
  signUpPremium,
  validateToken,
} from "../Controller/UserController.js";
import { verifyToken, isLoginWithTokenHeader } from "../middleware/auth.js";

import express from "express";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", verifyToken, signOut);
router.put("/change-password", verifyToken, changePassword);
router.put("/update-profile", isLoginWithTokenHeader, updateProfile);
router.post("/signup-premium", verifyToken, signUpPremium); // thêm middleware isAdmin
router.get("/validate-token", verifyToken, validateToken);
export default router;
