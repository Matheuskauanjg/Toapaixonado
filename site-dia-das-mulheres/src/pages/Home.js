import React from "react";
import Header from "../components/Header";
import Counter from "../components/Counter";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import Hearts from "../components/Hearts"; // Importar os corações
import MusicPlayer from "../components/MusicPlayer"; // Importar o player de música

const Home = () => {
  return (
    <div>
      <Hearts /> {/* Corações caindo no fundo */}
      <Header />
      <Counter />
      <MusicPlayer /> {/* Player de música do Spotify */}
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
