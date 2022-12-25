import React from "react";
import { BRANDNAME } from "../../constants";
import "./header.css";
import headerLogo from "../../assets/images/plain.png";
import LogoSVG from "../../assets/icons/LogoSVG";

export default function Header(props) {
  const { isScrolled } = props;

  const scroll = (pageSection) => {
    const section = document.querySelector(`#${pageSection}`);
    section.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <header
      class={`text-gray-400 body-font main ${isScrolled ? "scrolled" : ""}`}
    >
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
          <LogoSVG />
          <span class="ml-3 text-xl">{BRANDNAME}</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center menu-options">
          <a class="mr-5 hover:text-white" onClick={() => scroll("home")}>
            Home
          </a>
          <a class="mr-5 hover:text-white" onClick={() => scroll("mission")}>
            Mission
          </a>
          <a class="mr-5 hover:text-white" onClick={() => scroll("work")}>
            Our Work
          </a>
          <a
            class="mr-5 hover:text-white"
            onClick={() => scroll("testimonials")}
          >
            Testimonials
          </a>
          <a class="mr-5 hover:text-white" onClick={() => scroll("contact")}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
