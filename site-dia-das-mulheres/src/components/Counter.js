import React, { useState, useEffect } from "react";

const Counter = () => {
  const [timeElapsed, setTimeElapsed] = useState({
    seconds: 0,
    minutes: 0,
    hours: 0,
    days: 0,
    months: 0
  });

  useEffect(() => {
    const startDate = new Date(2023, 11, 20); // 20 de dezembro
    const updateCounter = () => {
      const now = new Date();
      const diffTime = now - startDate;

      const seconds = Math.floor(diffTime / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30.44); // Média de dias por mês

      setTimeElapsed({
        seconds: seconds % 60,
        minutes: minutes % 60,
        hours: hours % 24,
        days: days % 30.44,
        months
      });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter">
      <h2>❤️❤️ EU TE AMO há...</h2>
      <p>Segundos</p>
      <h3>{timeElapsed.seconds}</h3>
      <p>Minutos</p>
      <h3>{timeElapsed.minutes}</h3>
      <p>Horas</p>
      <h3>{timeElapsed.hours}</h3>
      <p>Dias</p>
      <h3>{timeElapsed.days}</h3>
      <p>Meses</p>
      <h3>{timeElapsed.months}</h3>
    </div>
  );
};

export default Counter;
