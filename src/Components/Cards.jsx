import React from "react";
import Brain from "../assets/brain.svg";
import Dumbbell from "../assets/dumbbell.svg";
import Trophy from "../assets/trophy.svg";

const cardsInfos = [
  {
    id: 1,
    title: "Personalização Avançada",
    description:
      "Nossos planos são adaptados às suas necessidades individuais, garantindo que você alcance seus objetivos de forma eficaz.",
    icon: Dumbbell,
  },
  {
    id: 2,
    title: "Ajuda da IA",
    description:
      "IA de ponta para otimizar seus treinos e maximizar resultados.",
    icon: Trophy,
  },
  {
    id: 3,
    title: "Facilidade de Uso",
    description:
      "Interface intuitiva que torna o acompanhamento do seu progresso simples e agradável.",
    icon: Brain,
  },
];

const Cards = () => {
  return (
    <div className="bg-background min-h-110 flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
        {cardsInfos.map((card) => (
          <div
            key={card.id}
            className="rounded-2xl shadow-lg p-6 flex flex-col items-center border-1 border-white text-center hover:scale-105 transition-transform"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-16 h-16 mb-4 select-none"
            />
            <h3 className="text-xl font-bold text-primarytext mb-2">
              {card.title}
            </h3>
            <p className="text-secondarytext text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
