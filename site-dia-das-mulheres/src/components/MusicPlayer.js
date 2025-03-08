import React from "react";

const MusicPlayer = () => {
  return (
    <div className="music-container">
      <iframe
        title="Spotify Player"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/70HrtYu3IBWpBIrPLEkcuP?utm_source=generator&autoplay=true" // Parâmetro autoplay=true
        width="300" // Ajuste a largura
        height="80" // Ajuste a altura
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
