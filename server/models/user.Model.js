import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// Sign up the model
userSchema.statics.signup = async (username, email, password) => {
  const existsUsername = await User.findOne({ username });
  const existsEmail = await User.findOne({ email });
  if (existsUsername) {
    throw new Error("Username already exists");
  }
  if (existsEmail) {
    throw new Error("Email already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({ username, email, password: hashedPassword });
  return user;
};

// Login the model
userSchema.statics.login = async function (username, email, password) {
  const user = await this.findOne({ username, email }).select("+password");

  if (!user) {
    throw new Error("Username or Email incorrect !!!");
  }

  // Compare password
  const matchPassword = await bcrypt.compare(password, user.password);
  if (!matchPassword) {
    throw new Error("Wrong Password");
  }

  return user;
};

const User = mongoose.model("User", userSchema);

export default User;
