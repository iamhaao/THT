import {
  signUp,
  signIn,
  signOut,
  changePassword,
  signUpPremium,
  validateToken,
} from "../Controller/UserController.js";
import { verifyToken } from "../middleware/auth.js";

import express from "express";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", verifyToken, signOut);
router.put("/change-password", verifyToken, changePassword);
router.post("/signup-premium", verifyToken, signUpPremium); // thêm middleware isAdmin
router.get("/validate-token", verifyToken, validateToken);
export default router;
