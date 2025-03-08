import React from "react";
import Header from "../components/Header";
import Counter from "../components/Counter";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Hearts from "../components/Hearts"; // Importar os corações

const Home = () => {
  return (
    <div>
      <Hearts /> {/* Corações caindo no fundo */}
      <Header />
      <Counter />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
