import React from "react";
import { scrollToSection } from "../../helpers/helperFunctions";

export default function HeroText() {
  return (
    <div className="hero-text-container lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Make your clients fall in love
        <br className="hidden lg:inline-block" /> with your product.
      </h1>
      <p className="mb-8 leading-relaxed">Building websites to perfection.</p>
      <div className="flex justify-center">
        <button
          onClick={() => scrollToSection("contact")}
          className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Let's Talk
        </button>
        <button
          onClick={() => scrollToSection("work")}
          className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
        >
          Check Our Work
        </button>
      </div>
    </div>
  );
}
