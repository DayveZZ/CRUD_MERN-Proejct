import jwt from "jsonwebtoken";

const { JWT_SECRET } = process.env;
if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is missing. Add it to your .env");
}

export const generateToken = (id, email) => {
  return jwt.sign({ id, email }, JWT_SECRET, { expiresIn: "1d" });
};
