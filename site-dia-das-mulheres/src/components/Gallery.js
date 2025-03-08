import React from "react";

const Gallery = () => {
  const photos = [
    "/images/foto1.jpg",
    "/images/foto2.jpg",
    "/images/foto3.jpg",
  ];

  return (
    <div className="gallery">
      <h2>A garota que eu amo, a mais perfeita</h2>
      <div className="photo-grid">
        {photos.map((photo, index) => (
          <img key={index} src={photo} alt={`foto-${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
