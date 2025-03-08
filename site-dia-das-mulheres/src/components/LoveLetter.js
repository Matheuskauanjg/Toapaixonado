import React, { useState } from "react";
import "./LoveLetter.css"; // Importando o CSS para a carta

const LoveLetter = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLetter = () => setIsOpen(!isOpen);

  return (
    <div className="love-letter-container">
      <div className={`love-letter ${isOpen ? "open" : ""}`} onClick={toggleLetter}>
        <div className="love-letter-header">
          <h3>{title}</h3>
          <button className="toggle-button">{isOpen ? "Fechar" : "Abrir"}</button>
        </div>
        {isOpen && <div className="love-letter-content"><p>{content}</p></div>}
      </div>
    </div>
  );
};

export default LoveLetter;
