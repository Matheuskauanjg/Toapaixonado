import React, { useState, useEffect } from "react";

const Counter = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const startDate = new Date(2023, 11, 20); // 20 de dezembro de 2023
    const updateCounter = () => {
      const now = new Date();
      const diffTime = now - startDate; // Diferença em milissegundos

      const seconds = Math.floor(diffTime / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const years = Math.floor(days / 365);
      const months = Math.floor((days % 365) / 30); // O restante dos dias viram meses
      const remainingDays = (days % 365) % 30; // O restante dos meses viram dias

      setTimeElapsed({
        years,
        months,
        days: remainingDays,
        hours: hours % 24,
        minutes: minutes % 60,
        seconds: seconds % 60
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter">
      <h2>❤️❤️ EU TE AMO há...</h2>
      <div className="counter-item">
        <p>Anos</p>
        <h3>{timeElapsed.years}</h3>
      </div>
      <div className="counter-item">
        <p>Meses</p>
        <h3>{timeElapsed.months}</h3>
      </div>
      <div className="counter-item">
        <p>Dias</p>
        <h3>{timeElapsed.days}</h3>
      </div>
      <div className="counter-item">
        <p>Horas</p>
        <h3>{timeElapsed.hours}</h3>
      </div>
      <div className="counter-item">
        <p>Minutos</p>
        <h3>{timeElapsed.minutes}</h3>
      </div>
      <div className="counter-item">
        <p>Segundos</p>
        <h3>{timeElapsed.seconds}</h3>
      </div>
    </div>
  );
};

export default Counter;
