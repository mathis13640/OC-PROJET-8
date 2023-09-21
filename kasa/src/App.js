import { BrowserRouter } from "react-router-dom";
import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RoutesReact from "./Routes/Router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <RoutesReact />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
