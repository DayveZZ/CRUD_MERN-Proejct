import User from "../models/user.Model.js";

const loginUser = async (req, res) => {
  res.status(200).json({ Status: "User Logged in !!!" });
};

const signupUser = async (req, res) => {
  res.status(200).json({ Status: "User Signed up !!!" });
};

export { loginUser, signupUser };
