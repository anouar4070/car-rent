import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App.jsx";
import About from "./About.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
