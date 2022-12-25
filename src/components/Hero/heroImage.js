import React from "react";
import heroImage from "../../assets/images/hero-img-removebg-preview (1).png";

export default function HeroImage() {
  return (
    <div className="hero-image-container lg:max-w-lg lg:w-full md:w-1/2 w-5/6 img-container h-full flex items-center">
      <img
        className="object-cover object-center rounded img1"
        alt="Escube Solutions"
        src={heroImage}
      />
      <img
        className="object-cover object-center rounded img2"
        alt="Escube Solutions"
        src={heroImage}
      />
      <img
        className="object-cover object-center rounded img3"
        alt="Escube Solutions"
        src={heroImage}
      />
      <img
        className="object-cover object-center rounded img4"
        alt="Escube Solutions"
        src={heroImage}
      />
    </div>
  );
}
