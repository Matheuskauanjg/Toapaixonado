import React, { useEffect } from "react";

const Hearts = () => {
  useEffect(() => {
    const createHeart = () => {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.innerText = "❤️";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.animationDuration = Math.random() * 2 + 3 + "s";
      document.querySelector(".hearts-container").appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 5000);
    };

    const heartInterval = setInterval(createHeart, 500);

    return () => clearInterval(heartInterval);
  }, []);

  return <div className="hearts-container"></div>;
};

export default Hearts;
