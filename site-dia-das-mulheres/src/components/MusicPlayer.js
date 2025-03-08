import React from "react";

const MusicPlayer = () => {
  return (
    <div className="music-container">
      <iframe
        title="Spotify Player" // Título único para acessibilidade
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/70HrtYu3IBWpBIrPLEkcuP?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
