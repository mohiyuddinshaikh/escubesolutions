import React from "react";
import { BRANDNAME } from "../../constants";
import "./header.css";
import LogoSVG from "../../assets/icons/LogoSVG";
import { useMobileOrientation } from "react-device-detect";
import { scrollToSection } from "../../helpers/helperFunctions";

export default function Header(props) {
  const { isScrolled } = props;
  const { isPortrait } = useMobileOrientation();

  return (
    <header
      className={`text-gray-400 body-font main ${
        isScrolled || isPortrait ? "scrolled" : ""
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
        <a
          onClick={() => scrollToSection("home")}
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer"
        >
          <LogoSVG />
          <span className="ml-3 text-xl cursor-pointer">{BRANDNAME}</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center menu-options">
          {!isPortrait ? (
            <a
              className="mr-5 hover:text-white"
              onClick={() => scrollToSection("home")}
            >
              Home
            </a>
          ) : null}
          <a
            className="mr-5 hover:text-white"
            onClick={() => scrollToSection("mission")}
          >
            Mission
          </a>
          <a
            className="mr-5 hover:text-white"
            onClick={() => scrollToSection("work")}
          >
            Our Work
          </a>
          <a
            className="mr-5 hover:text-white"
            onClick={() => scrollToSection("testimonials")}
          >
            Testimonials
          </a>
          <a
            className="mr-5 hover:text-white"
            onClick={() => scrollToSection("contact")}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
