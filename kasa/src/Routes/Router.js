import { Routes, Route } from "react-router-dom";
import "../style/App.css";
import Home from "../pages/Home";
import About from "../pages/About";

function RoutesReact() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default RoutesReact;
