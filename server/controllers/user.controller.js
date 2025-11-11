import User from "../models/user.Model.js";
import { generateToken } from "../utils/token.js";

const signupUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.signup(username, email, password);

    // Create Token
    const token = generateToken(user._id);
    res
      .status(200)
      .json({ Status: "User Signed up !!!", username, email, password, token });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.login(username, email, password);

    // Create Token
    const token = generateToken(user._id);
    res
      .status(200)
      .json({ Status: "User Logged in !!!", username, email, password, token });
  } catch (err) {
    res.status(400).json({ Error: err.message });
  }
};
export { loginUser, signupUser };
