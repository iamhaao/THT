import User from "../models/user.js";

export const isAdmin = async (req, res, next) => {
  try {
    const token = req.header("auth_token");

    // decode token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await User.findById(decoded).select("-password");

    if (user && user.isAdmin) {
      next();
    } else {
      res.status(401);
      throw new Error("Not authorized as an admin!");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const isLogin = (req, res, next) => {
  try {
    // get token from header auth_token
    const token = req.header("auth_token");
    if (token) {
      next();
    } else {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
