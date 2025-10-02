import React from "react";
import { Link } from "react-router-dom";
import logoTxtLado from "../assets/LogoTxtLado.png";

const Header = () => {
  return (
    <nav className="bg-background flex items-center justify-between text-primarytext font-medium pl-10 pr-10 p-5 7w-screen">
      <Link to="/">
        <img src={logoTxtLado} alt="Enterprise Logo" className="" />
      </Link>
      <div className="flex gap-8">
        <Link to="/">
          <h2 className="hover:underline hover:underline-offset-4">Início</h2>
        </Link>
        <Link to="/services">
          <h2 className="hover:underline hover:underline-offset-4">Serviços</h2>
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
  );
};

export default Header;
