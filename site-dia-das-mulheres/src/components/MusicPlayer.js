import React from "react";

const MusicPlayer = () => {
  return (
    <div className="music-container">
      <iframe
        src="https://open.spotify.com/intl-pt/track/70HrtYu3IBWpBIrPLEkcuP?si=264813a18d884f3d"
        width="300"
        height="80"
        frameBorder="0"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default MusicPlayer;
