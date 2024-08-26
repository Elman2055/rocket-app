import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

createRoot(document.getElementById("root")).render(<App />);
