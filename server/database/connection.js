import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config(); // ensures .env is loaded before using process.env

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connection established"))
  .catch((error) =>
    console.error("Error connecting to MongoDB:", error.message)
  );

export default mongoose;
