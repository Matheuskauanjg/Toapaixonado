import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import LoveLettersPage from "./pages/LoveLettersPage"; // Importa a página das Cartas de Amor
import { Analytics } from "@vercel/analytics/react"; // Importando Vercel Analytics
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <Link to="/">🏠 Home</Link> | 
            <Link to="/cartas-de-amor">💌 Cartas de Amor</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Página inicial */}
          <Route path="/cartas-de-amor" element={<LoveLettersPage />} /> {/* Página das Cartas de Amor */}
        </Routes>

        {/* Componente do Vercel Analytics para rastrear visitas */}
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
