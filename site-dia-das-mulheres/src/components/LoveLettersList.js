import React from "react";
import LoveLetter from "./LoveLetter";

const letters = [
  { title: "Primeira Carta", content: "Meu amor, desde o primeiro dia, eu soube que você era especial..." },
  { title: "Segunda Carta", content: "Te amo mais do que palavras podem expressar. Você ilumina meus dias..." },
  { title: "Terceira Carta", content: "Cada momento ao seu lado é um presente. Meu coração é seu para sempre..." },
  { title: "Quarta Carta", content: "Sempre que olho para você, meu coração dispara. Você é tudo para mim!" },
  { title: "Quinta Carta", content: "Mesmo nos momentos mais difíceis, você é a minha razão de sorrir..." },
  { title: "Sexta Carta", content: "Eu te amo mais do que ontem, mas menos do que amanhã. Sempre ao seu lado!" },
  { title: "Sétima Carta", content: "Com você, cada dia é uma nova aventura. Não vejo a hora de viver muitos mais com você!" },
  { title: "Oitava Carta", content: "Eu nunca pensei que o amor fosse assim, mas ao seu lado, é mais do que perfeito!" },
  { title: "Nona Carta", content: "Te amo de uma forma que palavras não podem descrever. Cada segundo ao seu lado é especial." },
  { title: "Décima Carta", content: "Você é minha alma gêmea. O amor da minha vida e minha felicidade eterna." }
];

const LoveLettersList = () => {
  return (
    <div className="love-letters-list">
      {letters.map((letter, index) => (
        <LoveLetter key={index} title={letter.title} content={letter.content} />
      ))}
    </div>
  );
};

export default LoveLettersList;
