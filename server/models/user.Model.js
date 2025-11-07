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
  if (!password) throw new Error("Password is required");

  // Build OR conditions dynamically
  const orConditions = [];
  if (username) orConditions.push({ username });
  if (email) orConditions.push({ email });

  if (orConditions.length === 0) {
    throw new Error("Provide either username or email");
  }

  // Find user by username OR email
  const user = await this.findOne({ $or: orConditions }).select("+password");

  if (!user) {
    throw new Error("Invalid username or email");
  }

  // Compare password
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw new Error("Wrong password");
  }

  user.password = undefined; // optional: hide hash
  return user;
};

const User = mongoose.model("User", userSchema);

export default User;
