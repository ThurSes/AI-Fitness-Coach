import React, { useState, useEffect } from "react";
import Image1 from "../assets/ImgCarrousel1.jpg";
import Image2 from "../assets/ImgCarrousel2.jpg";
import Image3 from "../assets/ImgCarrousel3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: Image1,
    title: "Treine com Inteligência",
    text: "Planos personalizados com base no seu corpo e objetivos.",
    buttonText: "Começar Agora",
    buttonLink: "/login",
  },
  {
    image: Image2,
    title: "Alcance seu Potencial",
    text: "Acompanhe seu progresso e receba dicas em tempo real.",
    buttonText: "Saiba Mais",
    buttonLink: "/aboutus",
  },
  {
    image: Image3,
    title: "Seja sua Melhor Versão",
    text: "Combine tecnologia e treino para resultados duradouros.",
    buttonText: "Ver Planos",
    buttonLink: "/plans",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full mx-auto overflow-hidden rounded-2xl shadow-lg h-[550px]">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full flex-shrink-0 h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            <div className=""></div>
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-start p-12 text-white">
              <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
              <p className="text-lg mb-6 max-w-lg text-secondarytext">
                {slide.text}
              </p>
              <a
                href={slide.buttonLink}
                className="bg-primary hover:bg-accent text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={prevSlide}
        className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 text-white p-1 rounded-full"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
