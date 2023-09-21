import { Routes, Route } from "react-router-dom";
import "../css/App.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Error404 from "../pages/Error404";
import Flogement from "../pages/Flogement";
function RoutesReact() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/logement/:id" element={<Flogement />} />
      {/* Route for all other unknown pages, displaying the Error component */}
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default RoutesReact;
