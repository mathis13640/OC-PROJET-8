import React from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import falaise from "../assets/falaise.png";
import "../css/Home.css";

function Home() {
  return (
    <div className="mainhome">
      <Banner
        image={falaise}
        namealt="falaise"
        h1="Chez vous, partout et ailleurs"
      />
      <Card />
    </div>
  );
}

export default Home;
