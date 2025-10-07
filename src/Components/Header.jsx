import React from "react";
import { Link } from "react-router-dom";
import logoTxtLado from "../assets/LogoTxtLado.png";

const Header = () => {
  return (
    <div id="container" className="h-min items-center sticky top-5 z-30">
      <nav className="glass-nav flex items-center justify-between text-primarytext font-medium p-3 rounded-full mt-5 ml-10 mr-10 border-primary border-4">
        <Link to="/">
          <img src={logoTxtLado} alt="Enterprise Logo" className="" />
        </Link>
        <div className="flex gap-8 items-center">
          <Link to="/">
            <h2 className="hover:text-primary  hover:cursor-pointer">Início</h2>
          </Link>
          <Link to="/plans">
            <h2 className="hover:text-primary hover:cursor-pointer">Planos</h2>
          </Link>
          <Link to="/aboutus">
            <h2 className="hover:text-primary  hover:cursor-pointer">
              Sobre nós
            </h2>
          </Link>
          <Link to="/contact">
            <h2 className=" hover:text-primary hover:cursor-pointer">
              Contate-nos
            </h2>
          </Link>
          <Link to="/login">
            <button className="btn-ghost p-3 rounded-xl transition-all duration-300">
              Iniciar Treino
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
