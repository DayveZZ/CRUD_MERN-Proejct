import User from "../models/user.Model.js";

const loginUser = async (req, res) => {
  res.status(200).json({ Status: "User Logged in !!!" });
};

const signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.signup(username, email, password);
    // res.status(200).json({ Status: "User Signed up !!!" });
    res.status(200).json({ username, user });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

export { loginUser, signupUser };
