import React, { useEffect } from "react";

const MusicPlayer = () => {
  useEffect(() => {
    const iframe = document.querySelector("iframe");
    // Se o autoplay não funcionar, há uma alternativa que força a música a tocar
    iframe.src += "&autoplay=true";
  }, []);

  return (
    <div className="music-container">
      <iframe
        title="Spotify Player"
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/70HrtYu3IBWpBIrPLEkcuP?utm_source=generator"
        width="100%"
        height="80" // Ajustando o tamanho do player
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
