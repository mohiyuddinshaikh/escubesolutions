import React from "react";
// import heroImage from "../../assets/images/hero-img.jpg";
import heroImage from "../../assets/images/hero-img-removebg-preview (1).png";
import "./hero.css";

export default function Hero() {
  return (
    <section class="text-gray-400 body-font hero-container flex">
      <div class="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Make your clients fall in love
            <br class="hidden lg:inline-block" />
            with your product.
          </h1>
          <p class="mb-8 leading-relaxed">Empowering your online presence</p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Let's Talk
            </button>
            <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Check Our Work
            </button>
          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 img-container h-full flex items-center">
          <img
            class="object-cover object-center rounded img1"
            alt="Escube Solutions"
            src={heroImage}
          />
          <img
            class="object-cover object-center rounded img2"
            alt="Escube Solutions"
            src={heroImage}
          />
          <img
            class="object-cover object-center rounded img3"
            alt="Escube Solutions"
            src={heroImage}
          />
          <img
            class="object-cover object-center rounded img4"
            alt="Escube Solutions"
            src={heroImage}
          />
        </div>
      </div>
    </section>
  );
}
