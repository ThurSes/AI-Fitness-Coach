import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="">
      <footer className="justify-center flex items-center flex-row p-5 bg-background">
        <div id="contact" className="flex flex-row items-center">
          <a
            className="mr-3 ml-3  text-primarytext hover:text-accent"
            href="https://github.com/ThurSes"
          >
            <FontAwesomeIcon icon={faGithub} size="xl" />
          </a>
          <a
            className="mr-3 text-primarytext hover:text-accent"
            href="mailto:arthur.miranda5@etec.sp.gov.br"
          >
            <FontAwesomeIcon icon={faEnvelope} size="xl" />
          </a>
          <div id="text">
            <p className="text-secondarytext ">
              &copy; 2025 Todos os direitos reservados. Iron Coach
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
