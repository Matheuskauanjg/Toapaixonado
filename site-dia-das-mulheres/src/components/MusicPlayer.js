import React from "react";

const MusicPlayer = () => {
  return (
    <div className="music-container">
      <iframe
        src="https://open.spotify.com/embed/track/ID_DA_MUSICA"
        width="300"
        height="80"
        frameBorder="0"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
