import User from "../models/User.js";
import { generateToken } from "../middleware/auth.js";
import bcrypt from "bcryptjs";

export const signUp = async (req, res) => {
  try {
    const { email, fullName, password, phone, address, dob } = req.body;

    // check if user exists
    const isExists = await User.findOne({ email });
    if (isExists) {
      res.status(400);
      throw new Error("User is exist");
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      email,
      fullName: fullName,
      password: hashedPassword,
      phone,
      address,
      dob,
    });

    await user.save();
    const token = generateToken(user._id);
    res.cookie("auth_token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
    res.header("auth_token", token);
    res.status(201).json({ user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  const token = generateToken(user._id);

  res.cookie("auth_token", token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
  res.header("auth_token", token);
  res.status(200).json({ user, token });
};

export const signOut = async (req, res) => {
  res.clearCookie("auth_token");
  res.header("auth_token", "");
  res.status(200).json({ message: "Logged out successfully" });
};

export const changePassword = async (req, res) => {
  let { oldPassword, newPassword } = req.body;
  const user = await User.findById(req.user._id);
  const isMatch = await bcrypt.compare(oldPassword, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  newPassword = await bcrypt.hash(newPassword, 10);
  user.password = newPassword;
  await user.save();
  const token = generateToken(user._id);
  res.header("auth_token", token);
  res.status(200).json({ message: "Password changed successfully" });
};

export const signUpPremium = async (req, res) => {
  const user = await User.findById(req.user._id);
  const packagePremium = req.body.packagePremium;

  // search package premium by id
  const isExists = await PackagePremium.findById(packagePremium);
  if (!isExists) {
    return res.status(404).json({ message: "Package premium not found" });
  }
  user.premium.exp = new Date(
    new Date().getTime() + packagePremium * 24 * 60 * 60 * 1000
  );
  user.premium.isPremium = true;
  await user.save();
  res.status(200).json({ message: "Upgrade to premium successfully" });
};

export const updateProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  const { fullName, phone, dob } = req.body;
  user.fullName = fullName;
  user.phone = phone;
  user.dob = dob;
  await user.save();
  res.status(200).json({ user });
};

export const validateToken = async (req, res) => {
  res.status(200).json({ user: req.user });
};
