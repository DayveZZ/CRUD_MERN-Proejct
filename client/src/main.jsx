import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import WorkoutContext from "./context/WorkoutContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  // </StrictMode>
  <WorkoutContext>
    <App />
  </WorkoutContext>
);
