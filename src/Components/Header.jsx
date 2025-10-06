import React from "react";
import { Link } from "react-router-dom";
import logoTxtLado from "../assets/LogoTxtLado.png";

const Header = () => {
  return (
    <div id="container" className="h-min items-center sticky top-9 z-30">
      <nav className="bg-background backdrop-blur bg-opacity-0 flex items-center justify-evenly text-primarytext font-medium p-5 rounded-full mt-5 ml-20 mr-20 border-primary border-4">
        <Link to="/">
          <img src={logoTxtLado} alt="Enterprise Logo" className="" />
        </Link>
        <div className="flex gap-8">
          <Link to="/">
            <h2 className="hover:underline hover:underline-offset-4">Início</h2>
          </Link>
          <Link to="/plans">
            <h2 className="hover:underline hover:underline-offset-4">Planos</h2>
          </Link>
          <Link to="/aboutus">
            <h2 className="hover:underline hover:underline-offset-4">
              Sobre nós
            </h2>
          </Link>
          <Link to="/contact">
            <h2 className="hover:underline hover:underline-offset-4">
              Contate-nos
            </h2>
          </Link>
        </div>
        <Link to="/login">
          <button className="inset-ring-2 inset-ring-primary p-3 rounded-xl ml-20 hover:bg-accent hover:inset-ring-2 hover:inset-ring-primarytext transition-all duration-300">
            Iniciar Treino
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
