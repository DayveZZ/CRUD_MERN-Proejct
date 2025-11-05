import mongose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = mongose.Schema({
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
userSchema.static.signip = async (username, email, password) => {
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

const User = mongose.model("User", userSchema);

export default User;
