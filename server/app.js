import express from "express";
import "./database/connection.js"; // Ensure DB connection is established

const app = express();
const PORT = process.env.PORT || 3000;

// connect to MongoDB after env is loaded
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
